import { useState, useRef, useContext } from "react";
import { Camera } from "lucide-react";
import { UserContext } from "../contexts/UserContext";
import { getCurrentLocation } from "../lib/Location";

export const UserNewReport = () => {
  const { newReport, setNewReport } = useContext(UserContext);

  const [cameraOpen, setCameraOpen] = useState(false);
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [processing, setProcessing] = useState(false);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Start camera
  const startCamera = async () => {
    setCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { exact: "environment" } },
      });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (err) {
      console.error("Back camera not found, fallback to default", err);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    }
  };

  // Capture photo and store blob
  const capturePhoto = async () => {
    setProcessing(true);

    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);

    canvas.toBlob(async (blob) => {
      if (!blob) return;

      setFile(blob);
      setPreview(URL.createObjectURL(blob));

      // Store blob in context
      setNewReport((prev) => ({ ...prev, imageUrl: blob }));

      // Get location
      try {
        const locationData = await getCurrentLocation();
        setNewReport((prev) => ({
          ...prev,
          location: {
            address: locationData.address,
            latitude: locationData.latitude,
            longitude: locationData.longitude,
          },
        }));
      } catch (err) {
        console.error("Error fetching location:", err);
      }

      setProcessing(false);
    }, "image/jpeg");

    stopCamera();
  };

  // Stop camera
  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) stream.getTracks().forEach((t) => t.stop());
    setCameraOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 flex items-center gap-3 border-b border-gray-200">
        <button className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.0"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <div>
          <h1 className="text-lg font-semibold text-gray-800">
            Report New Issue
          </h1>
          <p className="text-sm text-gray-500">Step 1 of 3</p>
        </div>
      </header>

      {/* Main */}
      <main className="p-4 sm:p-6">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col items-center text-center space-y-4">
          {!cameraOpen && !file && (
            <div className="text-center mb-6">
              <div className="flex justify-center mb-2">
                <Camera size={48} className="text-blue-500" />
              </div>
              <h2 className="text-xl font-semibold text-gray-700">
                Upload a Photo
              </h2>
              <p className="text-gray-500 text-sm">
                Take a photo or select one from your gallery to document the
                issue.
              </p>
            </div>
          )}

          {!cameraOpen && !preview && (
            <button
              onClick={startCamera}
              className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
            >
              {processing ? "Processing..." : "Take Photo"}
            </button>
          )}

          {cameraOpen && (
            <div className="w-full space-y-3">
              <video
                ref={videoRef}
                className="w-full h-[69vh] object-cover"
              />
              <div className="flex justify-center gap-3">
                <button
                  onClick={capturePhoto}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                  {processing ? "Processing..." : "Capture"}
                </button>
                <button
                  onClick={stopCamera}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {preview && (
            <div className="w-full space-y-3">
              <img src={preview} alt="Preview" className="w-full rounded-md" />
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => console.log("✅ Confirmed Report:", newReport)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Confirm
                </button>
                <button
                  onClick={() => {
                    setPreview(null);
                    setFile(null);
                    setNewReport((prev) => ({ ...prev, imageUrl: null }));
                    startCamera();
                  }}
                  className="bg-gray-300 px-4 py-2 rounded-lg"
                >
                  Retake
                </button>
              </div>
            </div>
          )}

          <canvas ref={canvasRef} style={{ display: "none" }} />
        </div>
      </main>
    </div>
  );
};
