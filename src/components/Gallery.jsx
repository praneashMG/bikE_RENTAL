// import React, { useEffect, useState } from "react";

// function Gallery() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   const fetchImages = () => {
//     fetch("http://localhost/image_upload_project/get-images.php")
//       .then((res) => res.json())
//       .then((data) => setImages(data))
//       .catch(() => setImages([]));
//   };



//   return (
//     <div className="max-w-5xl mx-auto px-6 py-10">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//         Image Gallery
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {images.map((img) => (
//           <div
//             key={img.id}
//             className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
//           >
//             <img
//               src={`data:${img.type};base64,${img.image}`}
//               alt={img.name}
//               className="w-full h-48 object-cover"
//               loading="lazy"
//               draggable={false}
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold text-gray-900 truncate" title={img.name}>
//                 {img.name}
//               </h3>
//               <p className="text-gray-600 text-sm mt-1">
//                 Uploaded: {new Date(img.uploaded_at).toLocaleDateString()}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Gallery;
