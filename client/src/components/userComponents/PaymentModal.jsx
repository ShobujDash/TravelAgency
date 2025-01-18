import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import instance from "@/utils/axios";
import { useState } from "react";
import { toast } from "react-toastify";
import QR from "../../assets/image/myBkasQr.jpg"

export function AlertDialogDemo({ callback, payment }) {
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState({
    tranNum: "",
    mobileNum: "",
  });

  const changeData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleConfirmPayment = async () => {
    try {
      setLoading(true);
      await callback(inputData); // Call the callback with the collected input data
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error("An error occurred while processing payment.");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          disabled={payment}
          className={`w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition ${payment && "bg-white border-2 border-red-400 rounded-lg text-teal-600"}`}
        >
          {payment ? "Payment Succes" : "Payment"}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Payment</AlertDialogTitle>
          <AlertDialogDescription>
            {/* Modal */}
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-4xl mx-4 md:mx-0 md:flex md:items-center">
              <div className="w-full">
                <div className="">
                  <p className="text-gray-700 leading-relaxed">
                    Total <strong> {"100 taka"} </strong> taka send money to
                    this number.
                    <br /> <strong> Bkash Personal 01718484267 </strong>। <br />
                    Then the correct instructions will be sent via your email.
                  </p>
                </div>

                {/* QR Code and bkash */}
                <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
                  <img
                    src={QR}
                    alt="QR Code"
                    className="w-40 h-60 mb-4 md:mb-0"
                  />

                  <div className="text-center md:text-left">
                    <p className="font-bold mb-2 text-gray-800">
                      Scan bKash QR
                    </p>
                    <strong> 01718484267 </strong>
                    <p className="text-pink-600 text-lg font-semibold">bKash</p>
                  </div>
                </div>

                {/* Input and Submit */}
                <div className="mt-5">
                  <input
                    name="tranNum"
                    value={inputData.tranNum}
                    onChange={changeData}
                    type="text"
                    required
                    placeholder="আপনার ট্রান্সেকশন নাম্বার লিখুন"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-pink-500 mb-2"
                  />
                  <input
                    name="mobileNum"
                    value={inputData.mobileNum}
                    onChange={changeData}
                    type="number"
                    required
                    placeholder="প্রেরণকৃত নাম্বারটি লিখুন"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-pink-500"
                  />
                </div>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirmPayment} disabled={loading}>
            {loading ? "Processing..." : "Confirm"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
