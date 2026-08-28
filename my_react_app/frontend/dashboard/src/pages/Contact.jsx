

function Contact() {
    return (
        <section className="contact_section">
            <div className="contact_info">
                <p className="tagline">START A CONVERSATION</p>

                <h2>
                    Have a good <br></br>
                    one <br></br>
                    <span className="highlight">in mind?</span>
                </h2>

                <p className="description">Tell me what you’re dreaming up, where it feels wobbly, and what would make this project a win.</p>

                <div className="social_links">
                    <a href="https://www.facebook.com/antoniamae.apostol/" className="social_btn">Facebook</a>
                    <a href="toniapstl@gmail.com" className="social_btn">Gmail</a>
                    <a href="https://www.instagram.com/hahahahhahalaugh/" className="social_btn">Instagram</a>
                    <a href="https://discord.com/users/hahahalaugh" className="social_btn">Discord</a>
                    <a href="https://github.com/ton-ia" className="social_btn">Github</a>
                </div>
            </div>

            <div className="contact_card">
                <div className="card_header">
                    <span className="paper_plane_icon"></span>
                    <h3>Tap me up</h3>
                </div>

                <form className="contact_form">
                    <input type="text" placeholder="Your Name" required></input>
                    <input type="email" placeholder="Your Email Address" required></input>
                    <textarea placeholder="Tell me..." rows="5" required></textarea>

                    <button type="submit">Send it my way</button>
                </form>

            </div>


        </section>
    );
};

export default Contact