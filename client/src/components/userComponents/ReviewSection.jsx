import { useAuthContext } from "@/context/AuthContext";
import instance from "@/utils/axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ReviewSection = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const hotelId = searchParams.get("hotelId");

  const { user } = useAuthContext();
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(null);
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const navigate = useNavigate();

  console.log(comments);

  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "Gisella P.",
      text: "Amazing! Aliquam, bibendum arcu quis, laoreet erat, phasellus nec congue lorem!",
      rating: 4,
      timeAgo: "9 months ago",
    },
    {
      id: 2,
      user: "Gisella P.",
      text: "Amazing! Aliquam, bibendum arcu quis, laoreet erat, phasellus nec congue lorem!",
      rating: 4,
      timeAgo: "9 months ago",
    },
    {
      id: 3,
      user: "Gisella P.",
      text: "Amazing! Aliquam, bibendum arcu quis, laoreet erat, phasellus nec congue lorem!",
      rating: 4,
      timeAgo: "9 months ago",
    },
    {
      id: 4,
      user: "Gisella P.",
      text: "Amazing! Aliquam, bibendum arcu quis, laoreet erat, phasellus nec congue lorem!",
      rating: 4,
      timeAgo: "9 months ago",
    },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.length > 200) {
      return;
    }
    try {
      const { data } = await instance.post(`/api/comment/create`, {
        content: comment,
        postId: hotelId,
        userId: user._id,
      });

      if (data?.success) {
        setComment("");
        setCommentError(null);
        setComments([data, ...comments]);
      }
    } catch (error) {
      setCommentError(error.message);
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const { data } = await instance.get(
          `/api/comment/getPostComments/${hotelId}`
        );
        if (data?.success) {
          setComments(data?.comments);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchComments();
  }, [hotelId]);

  return (
    <div className="max-w-full mx-auto p-4 bg-transparent rounded-lg shadow-md overflow-y-auto h-[500px]">
      {/* Add Review Section */}
      <div className="mb-2">
        {user ? (
          <div className=" flex items-center gap-1 my-5 text-gray-100 text-sm">
            <p>Signed in as:</p>
            <img
              className="h-5 w-5 object-cover rounded-full"
              src={user?.image}
              alt="profile"
            />
            <Link
              className="text-xs text-cyan-600 hover:underline"
              to={"/dashboard?tab=profile"}
            >
              @{user?.name}
            </Link>
          </div>
        ) : (
          <div className="text-sm text-teal-600 my-5 flex gap-1">
            You must be signed in to comment.
            <Link className="text-blue-500 hover:underline" to={`/sign-in`}>
              Sign In
            </Link>
          </div>
        )}
        <textarea
          className="w-full p-3 border text-black border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
          placeholder="Write your review here..."
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        ></textarea>
        <div className="flex items-center justify-between mt-4">
          {/* Star Rating */}
          {/* <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className={`text-xl ${
                  star <= newRating ? "text-yellow-500" : "text-gray-300"
                }`}
                onClick={() => setNewRating(star)}
              >
                ★
              </button>
            ))}
          </div> */}
          <p className="text-gray-200">
            {200 - comment.length} characters remaining
          </p>
          <button
            onClick={handleSubmit}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Write Review
          </button>
        </div>
        {commentError && <p className="mt-5 text-blue-600 underline">Please Login First</p>}
      </div>

      {/* Reviews Section */}
      <div className="space-y-6">
        {comments?.length === 0 ? (
          <p className="text-sm my-5">No comments yet!</p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment._id}
              className="p-4 bg-white rounded-lg shadow flex gap-4"
            >
              {/* User Avatar */}
              <div>
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src={comment?.userId?.image}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Review Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h5 className="font-semibold text-black">
                    {comment?.userId?.name}
                  </h5>
                  <span className="text-sm text-gray-500">
                    {comment?.createdAt?.split("T")[0]}
                  </span>
                </div>

                <p className="text-gray-700 mt-2">{comment?.content}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <button className="hover:underline">Like</button>
                  <button className="hover:underline">Dislike</button>
                  <button className="hover:underline">Reply</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
