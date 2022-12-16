import axios from 'axios'
import "./Contact.css";

const Contact = () => {
  const form = document.getElementById('formEmail')
  return (
    <>
      <section className="contact--me pt-5">
        <div className="container">
          <h2 className="text-center my-5">Let's get in touch</h2>
          <div className="row contact--row mb-5">
            <div className="image--container col-12 col-md-6">
              <img className='image--contact' src="/img/bio--sm.jpg" alt="Image of my contact form" />
            </div>
            <div className="col-12 col-md-6">
              <form id="formEmail" className="container" onSubmit={e=>{
                e.preventDefault()
                alert('Your message was sent successfully')
                let email = (e.target.email.value),
                    option = (e.target.option.value),
                    message = (e.target.message.value)
                
                  axios.post('http://localhost:4000/contact',{
                    email,
                    option,
                    message
              })
                .catch (error=>console.log(error))
                  form.reset()
              }}>
                <div>
                  <label htmlFor="email" className="form-label">
                    Write your email
                  </label>
                  <input type="text" name="email" id="email" className="form-control" />
                </div>
                <div>
                  <label htmlFor="option">Choose an option</label>
                  <select name="option" id="option" className="form-select">
                    <option value="0"></option>
                    <option value="1">I want to buy</option>
                    <option value="2">I want to get in touch</option>
                    <option value="3">I want to subscribe to your newsletter</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message">Write your thoughts</label>
                  <textarea name="message" id="message" cols="30" rows="7" className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-outline-secondary">
                  Send
                </button>
                <button type="reset" className="btn btn-outline-secondary m-3">
                  Clear
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
