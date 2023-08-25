import React from 'react'
import Layout from '../../../Components/Layout/PostLogin/Layout'
import user from '../../../Assets/Images/user1.png'
import ReviewBox from '../../../Components/Review/ReviewBox';
const ServiceReview = () => {
  const reviewData = [
    {
      id: 1,
      img: user,
      name: "Alan Athaway",
      rate: 3,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      img: user,
      name: "Alan Athaway",
      rate: 3,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      img: user,
      name: "Alan Athaway",
      rate: 3,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 4,
      img: user,
      name: "Alan Athaway",
      rate: 3,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 5,
      img: user,
      name: "Alan Athaway",
      rate: 3,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 6,
      img: user,
      name: "Alan Athaway",
      rate: 3,
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  return (
    <>
      <Layout>
        <section className="review_section">
          <div className="row g-4">
            {reviewData.map((items, index) => {
              return (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <ReviewBox
                    user={user}
                    username={"Alan Athaway"}
                    rating={3}
                    review={
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    }
                  />
                </div>
              );
            })}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ServiceReview