import React from 'react';
import Image from 'next/image';

const categories = [
  {
    title: "Pre Primary Photo",
    images: 8,
    driveLink: "https://drive.google.com/your-folder-link",
    imageUrl: "https://images.pexels.com/photos/8422209/pexels-photo-8422209.jpeg?auto=compress&cs=tinysrgb&w=600", // Example image URL for this category
  },
  {
    title: "Primary and Secondary Photo",
    images: 7,
    driveLink: "https://drive.google.com/your-folder-link",
    imageUrl: "https://images.pexels.com/photos/8465501/pexels-photo-8465501.jpeg?auto=compress&cs=tinysrgb&w=600", // Example image URL for this category
  },
  {
    title: "Independence Day",
    images: 10,
    driveLink: "",
    imageUrl: "https://varthana.com/school/wp-content/uploads/2024/08/B1062-School.jpg", // Example image URL for this category
  },

  {
    title: "Rainy Day",
    images: 8,
    driveLink: "",
    imageUrl: "https://img.freepik.com/free-photo/young-child-enjoying-childhood-happiness-by-playing-puddle-water-after-rain_23-2151470096.jpg?ga=GA1.1.500025587.1734678899&semt=ais_hybrid", // Example image URL for this category
  },

  {
    title: "Summer Camp",
    images: 4,
    driveLink: "",
    imageUrl: "https://thethaiger.com/wp-content/uploads/2023/03/Panyaden-International-School-Chiang-Mai.jpeg", // Example image URL for this category
  },

  {
    title: "Ganesh Chaturti Celebration",
    images: 4,
    driveLink: "",
    imageUrl: "https://images.pexels.com/photos/30215577/pexels-photo-30215577/free-photo-of-vibrant-ganesh-idol-decorated-for-ganesh-chaturthi.jpeg?auto=compress&cs=tinysrgb&w=600", // Example image URL for this category
  },

  {
    title: "Yoga Day",
    images: 5,
    driveLink: "",
    imageUrl: "https://www.freepsdking.com/wp-content/uploads/2021/06/International-Yoga-Day-Poster-5-1024x1024.jpg", // Example image URL for this category
  },


  {
    title: "Grand Parents Celebration",
    images: 3,
    driveLink: "",
    imageUrl: "https://img.freepik.com/premium-photo/poster-grandparents-grandparents-holding-hands_960782-209583.jpg?ga=GA1.1.500025587.1734678899&semt=ais_hybrid", // Example image URL for this category
  },
  {
    title: "Palkhi Celebration",
    images: 10,
    driveLink: "",
    imageUrl: "https://indiranationalschool.ac.in/pre-primary/assets/images/indira-kids-tathawade/palkhi-celebration-2024/Palkhi_Celebration_11.jpg", // Example image URL for this category
  },
  {
    title: "Rakshabandhan Celebration",
    images: 6,
    driveLink: "",
    imageUrl: "https://img.freepik.com/premium-vector/happy-raksha-bandhan-cartoon-illustration-indian-festival-celebration_2175-5222.jpg?w=2000", // Example image URL for this category
  },
  {
    title: "Reading Club",
    images: 7,
    driveLink: "",
    imageUrl: "https://media.gettyimages.com/id/1496939490/photo/a-young-adult-black-teacher-with-diverse-child-reader-in-a-library.jpg?s=612x612&w=0&k=20&c=4p8lHydoT3aph8wHE99e8XUWIaxXrTkVD_tyJzsauMc=", // Example image URL for this category
  },
  {
    title: "Eco Club",
    images: 3,
    driveLink: "",
    imageUrl: "https://img.freepik.com/premium-photo/world-environment-day-photo-children-classroom-setting-interacting-with-model-globe_950002-601823.jpg?ga=GA1.1.500025587.1734678899&semt=ais_hybrid", // Example image URL for this category
  },
  {
    title: "Environment Day",
    images: 2,
    driveLink: "",
    imageUrl: "https://img.freepik.com/free-vector/flat-horizontal-banner-template-world-environment-day-celebration_23-2150368456.jpg?ga=GA1.1.500025587.1734678899&semt=ais_hybrid", // Example image URL for this category
  },
  {
    title: "Fancy Day Celebration",
    images: 6,
    driveLink: "",
    imageUrl: "https://i.ytimg.com/vi/QrFgNapaXdw/maxresdefault.jpg", // Example image URL for this category
  },
  {
    title: "Swacch Bharat Abhiyan",
    images: 4,
    driveLink: "",
    imageUrl: "https://media.gettyimages.com/id/917192382/photo/indian-school-children-take-part-in-a-swachh-bharat-abhiyan-cleaning-campaign-in-hyderabad-on.jpg?s=612x612&w=0&k=20&c=HYf5HKSvW2un_WFTzBFMJfu22_2hbdNIfSGObCrfz8E=", // Example image URL for this category
  },
  {
    title: "Object Talk Competition",
    images: 10,
    driveLink: "",
    imageUrl: "https://png.pngtree.com/png-clipart/20230130/ourlarge/pngtree-students-speech-debate-behind-the-podium-with-microphone-png-image_6575827.png", // Example image URL for this category
  },
  {
    title: "Diwali Celebration",
    images: 5,
    driveLink: "",
    imageUrl: "https://turntable.kagiso.io/images/Diwali.width-800.jpg", // Example image URL for this category
  },

];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-primary mb-12">Event Gallery</h1>

        {/* Masonry Grid for the Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
              <a
                href={category.driveLink} // Redirect to the Google Drive folder
                target="_blank" // Open the link in a new tab
                rel="noopener noreferrer"
              >
                <div className="relative h-64 w-full mb-4">
                  <Image
                    src={category.imageUrl} // Replace with actual image URL
                    alt={`${category.title}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                  />
                </div>

                <h2 className="text-xl font-semibold text-primary">{category.title}</h2>
                <p className="text-sm text-gray-500 mt-2">{category.images} images</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
