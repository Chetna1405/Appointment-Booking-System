import { assets } from "../assets/assets"

const Header = () => {
  return (
      <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-1 lg:px-20">
          {/* ----left side------ */}
          <div>
              <p>
                  Book Appointment <br /> With Trusted doctors
              </p>
              <div>
                  <img src={assets.group_profiles} alt="" />
                  <p>Simply browse through our extensive list of trusted doctors,
                     <br /> schedule your appointment hassle-free.</p>
              </div>
              <a href="">
                  Book Appointment <img src={assets.arrow_icon} alt="" />
              </a>
          </div>

          {/*------------- Right side ------------ */}
          <div>
              <img src={assets.header_img} alt="" />
            </div>
      </div>
  )
}

export default Header