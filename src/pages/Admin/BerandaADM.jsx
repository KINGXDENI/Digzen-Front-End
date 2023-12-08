import NavbarADM from "../../components/NavbarADM";
import user from "../../assets/images/user.png";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import Chart from "../../components/Chart/Chart";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const BerandaADM = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(cookies.get("userLog"));
    if (cookies.get("userData").user.role !== "admin") {
      navigate("/");
    }
  });

  return (
    <>
      <NavbarADM />
      <div className="flex justify-center py-10 ">
        <div className="bg-white w-5/6 h-auto rounded shadow-md y-10 md:w-[70%] lg:w-[50%] xl:w-[45%] relative">
          {/* Isi kotak center di sini */}
          <div className="py-5 md:flex md:gap-3 md:justify-center xl:gap-16">
            <div className="flex justify-center pb-3 md:pb-0 md:-ml-12">
              <div className="w-32 y-2 md:w-40">
                <img
                  src={user}
                  alt=""
                  className="border-4 border-black rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col px-10 my-auto md:px-0">
              <h1 className="text-2xl font-black text-center text-black ">
                {cookies.get("userData").user.nama}
              </h1>
              <div className="flex flex-row items-center justify-between pt-3">
                <span className="font-black label-text">NIP</span>
                <span className="max-w-screen md:w-3/5">
                  {cookies.get("userData").user.NIK}
                </span>
              </div>
              <div className="flex flex-row items-center justify-between pt-3">
                <span className="font-black label-text">Email</span>
                <span className="max-w-screen md:w-3/5">
                  {cookies.get("userData").user.email}
                </span>
              </div>
              <div className="flex flex-row items-center justify-between pt-3">
                <span className="font-black label-text">D.O.B</span>
                <span className="max-w-screen md:w-3/5">99-99-00</span>
              </div>
            </div>
          </div>

          <hr className="bg-indigo text-black p-[1px] mx-10 " />
          <div className="p-3 text-lg font-black text-center">
            Have a good day
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-10">
        <div className="flex flex-col bg-white w-5/6 h-auto rounded shadow-md y-10 md:flex-row md:w-[70%] lg:w-[50%] xl:w-[45%] relative">
          <div className="stat place-items-center">
            <div className="stat-title">Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc text-secondary">↗︎</div>
          </div>
          <div className="border-t-2 border-indigo stat place-items-center md:border-l-2 md:border-t-0">
            <div className="stat-title">Visitor</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎</div>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="flex mx-auto mb-10 bg-white w-5/6 h-auto rounded shadow-md y-10 md:flex-row md:w-[70%] lg:w-[50%] xl:w-[45%] relative">
        <Chart />
      </div>

      <Footer />
    </>
  );
};
export default BerandaADM;
