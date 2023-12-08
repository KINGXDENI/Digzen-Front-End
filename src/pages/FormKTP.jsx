import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ele from "../assets/images/ele.png";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

const FormKTP = () => {
  const navigate = useNavigate();

  // state label
  const [label, setLabel] = useState("");

  const handleChange = (event) => {
    setLabel(event.target.value);
  };

  const tanggal = [];
  for (let i = 1; i <= 31; i++) {
    tanggal.push(
      <MenuItem key={i} value={i}>
        {i}
      </MenuItem>
    );
  }

  const bulan = [];
  for (let i = 1; i <= 12; i++) {
    bulan.push(
      <MenuItem key={i} value={i}>
        {i}
      </MenuItem>
    );
  }

  const tahun = [];
  for (let i = 1950; i <= 2024; i++) {
    tahun.push(
      <MenuItem key={i} value={i}>
        {i}
      </MenuItem>
    );
  }
  return (
    <>
      <Navbar />
      <img
        src={ele}
        alt=""
        className="absolute top-0 right-0 z-0 object-cover object-left w-32 h-52"
      />

      <div className="bg-[#F5F5FA]">
        <div
          className="flex w-[60px] pt-[2rem] ml-16 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="text-lg font-bold material-symbols-outlined ">
            arrow_back
          </span>
          <p className="my-auto">back</p>
        </div>
        <div className="justify-center p-5">
          <div className="relative w-11/12 mx-auto bg-white shadow-2xl rounded-xl ">
            <h1 className="p-4 px-10 pt-6 text-2xl font-black text-indigo">
              Pedoman
            </h1>
            <hr className="bg-indigo text-black p-[1px] mx-10 " />
            <div className="p-4">
              <ul className="ml-10 mr-5 list-disc">
                <li className="my-2">
                  Lengkapi data diri sesuai dengan form yang telah disediakan.
                </li>
                <li className="my-2">
                  Dalam pengisian dokumen isikan sesuai dengan data resmi yang
                  telah anda miliki.
                </li>
                <li className="my-2">
                  Upload dokumen yang diperlukan seperti, surat keterangan RT,
                  surat keterangan RW dan Kartu Keluarga.
                </li>
                <li className="my-2">
                  Upload foto dengan ketentuan sebagai berikut:
                </li>
                <li className="my-2 ml-12">Foto terlihat muka dengan jelas.</li>
                <li className="my-2 ml-12">
                  Foto terlihat dari muka sampai pundak.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="justify-center p-5 pb-16">
          <div className="relative z-10 w-11/12 mx-auto bg-white shadow-2xl rounded-xl ">
            <h1 className="p-4 px-10 pt-6 text-2xl font-black text-indigo">
              {" "}
              Form Pengajuan
            </h1>
            <hr className="bg-indigo text-black p-[1px] mx-10 " />
            <div className="px-10">
              {/*  */}
              <form action="">
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="NIK"
                    type="number"
                    placeholder="xxxxxxxxxx"
                    variant="outlined"
                    className="w-full"
                    // onBlur={(e) => handleFormValueBlur(e, "NIK")}
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="Nama Lengkap"
                    placeholder="Nama Lengkap"
                    variant="outlined"
                    className="w-full"
                    // onBlur={(e) => handleFormValueBlur(e, "nama")}
                  />
                </div>
                {/* ttl mobile */}
                <div className="flex flex-row justify-between w-full gap-2 pt-4 md:hidden form-control">
                  <TextField
                    id="outlined-basic"
                    label="Tempat, Tanggal Lahir"
                    placeholder="Tempat, Tgl-Bln-Thn (10-02-2002)"
                    variant="outlined"
                    className="w-full"
                    // onBlur={(e) => handleFormValueBlur(e, "nama")}
                  />
                </div>
                {/* ttl large */}
                <div className="flex-row justify-between hidden w-full gap-2 pt-4 md:flex form-control">
                  <TextField
                    id="outlined-basic"
                    label="Tempat"
                    placeholder="Tempat"
                    variant="outlined"
                    className="w-full"
                    // onBlur={(e) => handleFormValueBlur(e, "nama")}
                  />
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Tanggal
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={label}
                      label="Tanggal"
                      onChange={handleChange}
                    >
                      {tanggal}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Bulan</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={label}
                      label="Bulan"
                      onChange={handleChange}
                    >
                      {bulan}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tahun</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={label}
                      label="Tahun"
                      onChange={handleChange}
                    >
                      {tahun}
                    </Select>
                  </FormControl>
                </div>
                <div className="flex flex-row justify-between w-full gap-2 pt-4 form-control">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Jenis Kelamin
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={label}
                      label="Jenis Kelamin"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Laki-Laki"}>Laki-Laki</MenuItem>
                      <MenuItem value={"Perempuan"}>Perempuan</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="flex flex-col justify-between w-full gap-2 pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="Alamat"
                    placeholder=""
                    variant="outlined"
                    className="w-full"
                    // onBlur={(e) => handleFormValueBlur(e, "nama")}
                  />
                </div>
                <div className="flex flex-col justify-between w-full gap-2 pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="RT/RT"
                    placeholder="xx/xx"
                    variant="outlined"
                    className="w-full"
                    // onBlur={(e) => handleFormValueBlur(e, "nama")}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Kelurahan/Desa"
                    placeholder="Kelurahan/Desa"
                    variant="outlined"
                    className="w-full"
                    // onBlur={(e) => handleFormValueBlur(e, "nama")}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Kecamatan"
                    placeholder="Kecamatan"
                    variant="outlined"
                    className="w-full"
                    // onBlur={(e) => handleFormValueBlur(e, "nama")}
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="Agama"
                    placeholder="Agama"
                    variant="outlined"
                    className="w-full"
                    // onBlur={(e) => handleFormValueBlur(e, "nama")}
                  />
                </div>
                <div className="flex flex-row justify-between w-full gap-2 pt-4 form-control">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Status Perkawinan
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={label}
                      label="Status Perkawinan"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Belum Menikah"}>Belum Menikah</MenuItem>
                      <MenuItem value={"Sudah Menikah"}>Sudah Menikah</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="Kewarganegaraan"
                    placeholder="Kewarganegaraan"
                    variant="outlined"
                    className="w-full"
                    // onBlur={(e) => handleFormValueBlur(e, "nama")}
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <TextField
                    id="outlined-basic"
                    label="Golongan Darah"
                    placeholder="Golongan Darah"
                    variant="outlined"
                    className="w-full"
                    // onBlur={(e) => handleFormValueBlur(e, "nama")}
                  />
                </div>

                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text">
                      Surat Pengantar RT
                    </span>
                  </label>
                  <input
                    type="file"
                    placeholder="PDF Pengantar RT"
                    className="w-full rounded-[5px] file-input file-input-bordered file-input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text">
                      Surat Pengantar RW
                    </span>
                  </label>
                  <input
                    type="file"
                    placeholder="PDF Pengantar RW"
                    className="w-full file-input rounded-[5px] file-input-bordered file-input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text">
                      Kartu Keluarga
                    </span>
                  </label>
                  <input
                    type="file"
                    placeholder="PDF Kartu Keluarga"
                    className="w-full rounded-[5px] file-input file-input-bordered file-input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="justify-between w-full pt-4 form-control md:flex md:flex-row">
                  <label className="label">
                    <span className="font-black label-text">Photo</span>
                  </label>
                  <input
                    type="file"
                    placeholder="PNG"
                    className="w-full rounded-[5px] file-input file-input-bordered file-input-md max-w-screen md:max-w-md lg:max-w-2xl xl:max-w-4xl"
                  />
                </div>
                <div className="flex-row-reverse pt-4 pb-6 md:flex">
                  <button className="text-white btn btn-block bg-indigo hover:bg-white hover:text-indigo hover:border-2 hover:border-indigo md:w-1/6">
                    Submit
                  </button>
                </div>
              </form>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <img
        src={ele}
        alt=""
        className="absolute left-0 z-0 object-cover object-right w-32 h-52 -bottom-28"
      />
    </>
  );
};

export default FormKTP;
