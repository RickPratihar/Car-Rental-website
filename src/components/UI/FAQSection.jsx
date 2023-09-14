import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const FAQSection = () => {
  return (
        <MDBContainer className="text-center">
          <section>
            <MDBTypography
              tag="h3"
              className="text-center mb-4 pb-2 text-primary fw-bold"
            >
              FAQ
            </MDBTypography>
            <p className="text-center mb-5">
              Find the answers for the most frequently asked questions below
            </p>
    
            <MDBRow>
              <MDBCol md="6" lg="4" className="mb-4">
                <MDBTypography tag="h6" className="mb-3 text-primary">
                  <MDBIcon far icon="paper-plane text-primary pe-2" />What types of vehicles do you offer on your website?
                </MDBTypography>
                <p>
                  <strong>
                    <u>Absolutely!</u>
                  </strong>{" "}
                  Our website offers a wide range of vehicles, including sedans, SUVs, trucks, electric cars, and hybrids from various manufacturers.


                </p>
              </MDBCol>
              <MDBCol md="6" lg="4" className="mb-4">
                <MDBTypography tag="h6" className="mb-3 text-primary">
                  <MDBIcon fas icon="pen-alt text-primary pe-2" />Are the prices on your website negotiable?
                </MDBTypography>
                <p>
                  <strong>
                    <u>Yes, it is possible!</u>
                  </strong>{" "}
                  The prices listed on our website are typically competitive and transparent. However, feel free to contact our sales team to discuss any special offers or negotiations.
                </p>
              </MDBCol>
              <MDBCol md="6" lg="4" className="mb-4">
                <MDBTypography tag="h6" className="mb-3 text-primary">
                  <MDBIcon fas icon="user text-primary pe-2" /> Can I schedule a test drive for a car I'm interested in?
                </MDBTypography>
                <strong>
                    <u>Absolutely!</u>
                  </strong>{" "}
                <p>
                 You can schedule a test drive by filling out the online form for the car you're interested in, or you can contact our dealership directly.
                </p>
              </MDBCol>
              <MDBCol md="6" lg="4" className="mb-4">
                <MDBTypography tag="h6" className="mb-3 text-primary">
                  <MDBIcon fas icon="rocket text-primary pe-2" /> How can I make a reservation for a rental car?
                </MDBTypography>
                <p>
                Making a reservation is easy. Simply visit our website and use the online booking tool. Choose your pickup and drop-off locations, dates, and preferred vehicle type. Then, follow the prompts to complete your reservation.
                </p>
              </MDBCol>
              <MDBCol md="6" lg="4" className="mb-4">
                <MDBTypography tag="h6" className="mb-3 text-primary">
                  <MDBIcon fas icon="home text-primary pe-2" /> What documents do I need to pick up the rental car?
                </MDBTypography>
                <p>
                  You will need a valid driver's license, a major credit card in your name, and a government-issued ID. International renters may need to provide a passport, along with an international driver's permit if required.
                </p>
              </MDBCol>
              <MDBCol md="6" lg="4" className="mb-4">
                <MDBTypography tag="h6" className="mb-3 text-primary">
                  <MDBIcon fas icon="book-open text-primary pe-2" /> Do you offer insurance coverage for rental cars?
                </MDBTypography>
                <p>
                Yes, we offer various insurance options to provide coverage in case of accidents or damage. These options include collision damage waivers (CDW), liability coverage, and personal accident insurance. Review the details during the reservation process.
                </p>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>
      );
    }
export default FAQSection