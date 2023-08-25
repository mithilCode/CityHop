import React, { useState } from "react";
import AddBtn from "../../../../Assets/Images/AddBtn.png";
import ProfileLayout from "../ProfileLayout";
const NewAddBank = () => {
  const [frontfile, setFrontFile] = useState("");
  const [file, setFile] = useState("");
  const handlefrontImg = (e) => {
    setFrontFile(e.target.files[0]);
  };
  const handlebackImg = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <>
      <ProfileLayout>
        <section className="home_service_list">
          <div className="container">
            <div className="heading_set_addbank">
              <h2>Bank Details</h2>
              <div>
                <form>
                  <div className="form_control">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="form_control">
                    <input type="text" placeholder="Email" />
                  </div>
                  <div className="form_control">
                    <input type="text" placeholder="Number" />
                  </div>
                  <div className="form_control">
                    <input type="text" placeholder="Date of Birth" />
                  </div>
                  <div className="form_control">
                    <input type="text" placeholder="Identify Number" />
                  </div>
                  <div className="form_control">
                    <input type="text" placeholder="City" />
                  </div>
                  <div className="form_control">
                    <input type="text" placeholder="Country" />
                  </div>
                  <div className="form_control">
                    <input type="text" placeholder="Address" />
                  </div>
                  <div className="form_control">
                    <input type="text" placeholder="State" />
                  </div>
                  <div className="form_control">
                    <input type="text" placeholder="Pincode" />
                  </div>
                  <div className="form_control">
                    <input type="text" placeholder="External Account Country" />
                  </div>
                  <div className="form_control">
                    <input type="text" placeholder="Bank Account Number" />
                  </div>
                  <div className="form_control">
                    <input type="text" placeholder="Routing Number" />
                  </div>
                  <div className="row g-3 py-3">
                    <div className="col-12 col-lg-6">
                      <h4 className="document_title"> Front Image</h4>
                      <div className="inputfile_set">
                        <input
                          type="file"
                          onChange={(e) => handlefrontImg(e)}
                          accept="image/png, image/jpeg"
                        />
                        <img src={AddBtn} className="add_icon" alt="" />
                        {frontfile && (
                          <div className="img_set">
                            <img
                              src={URL.createObjectURL(frontfile)}
                              alt="Profile Img"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <h4 className="document_title">Back Image</h4>
                      <div className="inputfile_set">
                        <input
                          type="file"
                          onChange={(e) => handlebackImg(e)}
                          accept="image/png, image/jpeg"
                        />
                           <img src={AddBtn} className="add_icon" alt="" />
                        {file && (
                          <div className="img_set">
                            <img
                              src={URL.createObjectURL(file)}
                              alt="Profile Img"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="submit_btn">
                    <button>Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </ProfileLayout>
    </>
  );
};

export default NewAddBank;
