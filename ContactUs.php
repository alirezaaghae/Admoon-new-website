<!-- include html setting (head) -->
<?php include('head.php'); ?>

<!-- page -->
<body id="ContactUs">
    <div class="wrapper ContactUs-page">
        <div class="container">
            <header>
                <?php include('nav.php'); ?>
            </header>
            <main>
                <section id="links">
                    <div class="title">
                        <h1>Lets work together</h1>
                        <p>We’are here to help – from advertising support to your request</p>
                    </div>
                    <div class="locationInfo">
                        <div class="map"><a href="https://www.google.com/partners/agency?id=6288273986" target="_blank"><img src="assets/images/contactUsMap.jpg" alt="admoon-location" title="admoon-location"></a></div>
                        <div class="textBox">
                            <ul>
                                <li>
                                    <img src="assets/images/locationIcon2.svg" alt="location-icon" title="location-icon">
                                    <a href="https://www.google.com/partners/agency?id=6288273986" target="_blank"><p>501, Baniyas CenterAl Maktoum sr., DeiraDubai, UAE</p></a>
                                </li>
                                <li>
                                    <img src="assets/images/timeIcon2.svg" alt="time-icon" title="time-icon">
                                    <p>You can reach us in 9:00 am to 20:00 pm</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="socialsNetwork">
                        <ul class="items">
                            <li class="item">
                                <a href="#" target="_blank">
                                    <img src="assets/images/callIcon3.svg" alt="call-icon">
                                    <span>+968 - 548 3422</span>
                                    <span>+968 - 469 2578</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" target="_blank">
                                    <img src="assets/images/mailIcon3.svg" alt="mail-icon">
                                    <span>Admoon@gmail.com</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" target="_blank">
                                    <img src="assets/images/telegramIcon3.svg" alt="telegram-icon">
                                    <span>Telegram</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" target="_blank">
                                    <img src="assets/images/whatsappIcon3.svg" alt="whatsapp-icon">
                                    <span>WhatsApp</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" target="_blank">
                                    <img src="assets/images/meetIcon3.svg" alt="Google-meet-icon">
                                    <span>Google meet</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section id="mainForm">
                    <div class="title">
                        <h2>Do you need our help</h2>
                        <p>We’ll do our best to get back to you as soon as possible.</p>
                    </div>
                    <div class="form contactUs">
                        <form class="form">
                            <span>We can help you with</span>
                            <div class="custom-select package">
                                <select>
                                  <option value="Audit">Audit</option>
                                  <option value="TuneUp">Tune up</option>
                                  <option value="AdsManagement">Ads Management</option>
                                  <option value="AccountSuspension">Account Suspension</option>
                                </select>
                            </div>
                            <div class="FullName">
                                <label>Full Name
                                    <input type="text" name="name" min="2" max="20">
                                </label>
                                <div class="bottom-line"><div class="fill-line"></div></div>
                            </div>
                            <div class="MailAddress">
                                <label>Email
                                    <input type="email" name="email">
                                </label>
                                <div class="bottom-line"><div class="fill-line"></div></div>
                            </div>
                            <div class="WebsiteAddress">
                                <label>Website URL
                                <input type="text" name="Website"></label>
                                <div class="bottom-line"><div class="fill-line"></div></div>
                            </div>
                            <div class="PhoneNumber">
                                <label>Phone Number
                                    <input type="tel" name="phone" maxlength="11">
                                </label>
                                <div class="bottom-line"><div class="fill-line"></div></div>
                            </div>
                            <div class="button">
                                <button class="send_button">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div class="bottomText">
                        <strong>Connect with us elsewhere</strong>
                        <ul class="items">
                            <li class="item"><a href="#" target="_blank"><img src="assets/images/linkedin0.svg" alt="linkedin-icon"></a></li>
                            <li class="item"><a href="#" target="_blank"><img src="assets/images/instagramIcon0.svg" alt="instagram-icon"></a></li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    </div>
</div>
<!-- include footer and scripts -->
<?php include('footer.php'); ?>
</body>