import MasterLayout from "@/components/userComponents/Layout/MasterLayout";
import { useAuthContext } from "@/context/AuthContext";
import { FaHeart, FaHome } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { IoBookmarks } from "react-icons/io5";

const ProfilePage = () => {
  const { user } = useAuthContext();

  return (
    <MasterLayout>
      <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-[#0C1529] via-[#0A2339] to-[#19173B]">
        {/* Sidebar */}
        <aside className=" hidden sm:block w-full md:w-64 bg-white shadow-md rounded-r-lg bg-gradient-to-t from-[#19173B] via-[#0A2339] to-[#0C1529]">
          <nav className="flex flex-col gap-4 p-6">
            <button className="flex items-center text-white hover:text-blue-100 p-2 hover:bg-blue-500 rounded-lg">
              <span className="material-icons">
                <FaHome />
              </span>
              <span className="ml-3">Home</span>
            </button>
            <button className="flex items-center text-white hover:text-blue-100 p-2 hover:bg-blue-500 rounded-lg">
              <span className="material-icons">
                <GrEdit />
              </span>
              <span className="ml-3">My Profile</span>
            </button>
            <button className="flex items-center text-white hover:text-blue-100 p-2 hover:bg-blue-500 rounded-lg">
              <span className="material-icons">
                <IoBookmarks />
              </span>
              <span className="ml-3">My Booking</span>
            </button>
            <button className="flex items-center text-white hover:text-blue-100 p-2 hover:bg-blue-500 rounded-lg">
              <span className="material-icons">
                <FaHeart />
              </span>
              <span className="ml-3">Fevourite</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Profile Section */}
          <section className="mt-6 flex flex-col lg:flex-row gap-6 ">
            {/* Profile Card */}
            <div className=" p-6 rounded-lg shadow-lg shadow-[#304252] w-full lg:w-1/3 border-t-4 border-purple-500 bg-transparent  ">
              <img
                src={user?.image}
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto border-4 border-purple-500"
              />
              <h2 className="text-center text-2xl font-bold text-white mt-4">
                {user?.name ? user.name.toUpperCase() : "No Name Available"}
              </h2>
              <p className="text-center text-sm text-blue-500">{user?.email}</p>
              <button className="w-full bg-purple-500 text-white py-2 rounded-lg mt-4 hover:bg-purple-600 shadow-md">
                <div className=" flex items-center justify-center gap-2">
                  <span>
                    <GrEdit />
                  </span>
                  <span>Edit Profile</span>
                </div>
              </button>
              <div className="mt-6">
                <p className="text-sm text-white">Email:</p>
                <p className="text-gray-700 font-medium">{user?.email}</p>
                <p className="text-sm text-white mt-4">Gender:</p>
                <p className="text-gray-700 font-medium">{user?.gender}</p>
                <p className="text-sm text-white mt-4">Address:</p>
                <p className="text-gray-700 font-medium">{user?.address}</p>
              </div>
            </div>

            {/* Stats and Appointments */}
            <div className="flex-1">
              {/* Stats */}
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-1 bg-transparent p-6 rounded-lg shadow-lg shadow-[#304252] border-t-4 border-blue-500">
                  <p className="text-sm text-gray-500">All Bookings</p>
                  <h3 className="text-3xl font-bold text-blue-700">5</h3>
                </div>
                <div className="flex-1 bg-transparent p-6 rounded-lg shadow-lg shadow-[#304252] border-t-4 border-green-500">
                  <p className="text-sm text-gray-500">Completed</p>
                  <h3 className="text-3xl font-bold text-green-700">2</h3>
                </div>
                <div className="flex-1 bg-transparent p-6 rounded-lg  border-t-4 border-red-500 shadow-lg shadow-[#304252] ">
                  <p className="text-sm text-gray-500">Cancelled</p>
                  <h3 className="text-3xl font-bold text-red-700">5</h3>
                </div>
              </div>

              {/* Appointments */}
              <div className="mt-6 bg-transparent rounded-lg shadow-lg">
                <div className="p-4 border-b bg-blue-900 rounded-t-lg">
                  <h3 className="font-bold text-white">Appointments</h3>
                </div>
                <div className="p-4">
                  <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 mb-2">
                    <p className="font-medium text-white">29 Sep - Plumbing</p>
                    <span className="text-red-500 border-2 border-red-500 rounded-full px-4 py-1 font-semibold">
                      Cancelled
                    </span>
                    <p className="text-white font-medium">$50</p>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white mb-2">
                    <p className="font-medium text-white">
                      15 Oct - Carpenting
                    </p>
                    <span className="text-blue-500 font-semibold">Booked</span>
                    <p className="text-white font-medium">$345</p>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 mb-2">
                    <p className="font-medium text-gray-700">
                      11 Nov - Painting
                    </p>
                    <span className="text-green-500 font-semibold">Done</span>
                    <p className="text-gray-700 font-medium">$130</p>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 mb-2">
                    <p className="font-medium text-gray-700">
                      13 Apr - Hair Drying
                    </p>
                    <span className="text-green-500 font-semibold">Done</span>
                    <p className="text-gray-700 font-medium">$80</p>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p className="font-medium text-gray-700">
                      24 Feb - Blue Print Structure
                    </p>
                    <span className="text-blue-500 font-semibold">Booked</span>
                    <p className="text-gray-700 font-medium">$80</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </MasterLayout>
  );
};

export default ProfilePage;
