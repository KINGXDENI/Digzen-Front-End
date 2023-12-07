import { useNavigate } from "react-router-dom";
import ele from "../assets/images/ele.png";
import { regAPI } from "../data/api-digzen";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import CustomError from "../util/customError";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFormValueBlur = (e, name) => {
    const formDataCopy = { ...formData };
    formDataCopy[name] = e.target.value;
    setFormData(formDataCopy);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) =>
      prevShowPassword === "password" ? "text" : "password"
    );
  };

  const handleRegClick = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    const { email, nomor, nama, password, NIK } = formData;
    try {
      if (nama && email && nomor && NIK && password) {
        const response = await regAPI.post("", JSON.stringify(formData));

        if (response.status == 201) {
          Swal.fire({
            title: "Sukses",
            icon: "success",
            text: response.data.message,
          }).then(() => {
            navigate("/otp", { state: { email } });
          });
        }
      } else {
        throw new CustomError(
          "validationError",
          "Form tidak lengkap mohon lengkapi form terlebih dahulu"
        );
      }
    } catch (err) {
      console.log(err);
      if (err.name == "validationError") {
        toast.error(err.message);
      } else {
        toast.error(err?.response?.data?.message);
      }
    } finally {
      setIsDisabled(false);
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <ToastContainer />
      <img
        src={ele}
        alt=""
        className="absolute top-0 right-0 z-0 object-cover object-left w-32 h-52"
      />{" "}
      {/* <div className="border-2 border-black "> */}
      <div className="flex items-center justify-center h-screen py-10 bg-background">
        <div className="relative z-10 w-5/6 bg-white rounded shadow-md y-10">
          {/* Isi kotak center di sini */}
          <h1 className="p-4 px-10 pt-6 text-2xl font-black text-center text-indigo">
            Register
          </h1>
          <hr className="bg-indigo text-black p-[1px] mx-10 " />
          <div className="px-10">
            <form name="formReg" id="formReg">
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <TextField
                  id="outlined-basic"
                  label="Nama Lengkap"
                  placeholder="Nama Lengkap"
                  variant="outlined"
                  className="w-full"
                  onBlur={(e) => handleFormValueBlur(e, "nama")}
                />
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  className="w-full"
                  placeholder="contoh@contoh.com"
                  onBlur={(e) => handleFormValueBlur(e, "email")}
                />
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  type="number"
                  placeholder="08xxxx"
                  variant="outlined"
                  className="w-full"
                  onBlur={(e) => handleFormValueBlur(e, "nomor")}
                />
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <TextField
                  id="outlined-basic"
                  label="NIX"
                  type="number"
                  placeholder="xxxxxxxxxx"
                  variant="outlined"
                  className="w-full"
                  onBlur={(e) => handleFormValueBlur(e, "NIK")}
                />
              </div>
              <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                <TextField
                  id="outlined-basic"
                  label="Password"
                  type={showPassword}
                  variant="outlined"
                  className="w-full"
                  onBlur={(e) => handleFormValueBlur(e, "password")}
                />
                <div className="relative ">
                  <button
                    type="button"
                    onClick={handleTogglePassword}
                    className="absolute transform -translate-y-1/2 cursor-pointer bottom-3 md:top-1/2 right-4"
                  >
                    {showPassword == "text" ? (
                      <span role="img" aria-label="Hide Password">
                        <FaRegEyeSlash />
                      </span>
                    ) : (
                      <span role="img" aria-label="Show Password">
                        <FaRegEye />
                      </span>
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-4 pb-6">
                <button
                  onClick={handleRegClick}
                  id="tombolReg"
                  disabled={isDisabled}
                  className="text-white btn btn-block bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo"
                >
                  Register
                </button>
                <span className="text-xs -mt-[3px] ml-[2px] text-black">
                  sudah memiliki akun?
                  <a
                    className="link link-primary"
                    onClick={() => navigate("/login")}
                  >
                    login
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <img
        src={ele}
        alt=""
        className="absolute left-0 z-0 object-cover object-right w-32 h-52 -bottom-0"
      />
    </>
  );
};

export default Register;
