<!-- header -->
<?php include 'includes/header.php'?>


<!-- end header -->
<!-- banner -->
<div id="home">
    <section class="banner_main">
        <div class="container-fluid">
            <div class="row d_flex">
                <div class="col-md-6">
                    <div class="text-bg">
                        <h1>Decentralized Insurance for EVERYONE</h1>
                        <p>Get our phone insurance policy using Ethereum right now! All you need is a Metamask wallet
                            and some Ethereum stored!</p>
                        <button onclick="homeToLogin()" class="read_more btn btn-default">Get Started</button>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="text-img">
                        <figure><img src="images/box_img.png" alt="#" /></figure>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <?php include "includes/footer.php" ?>
</div>
</header>



<?php 

    include "login.php" ;
    include "userPanel.php";
    include "adminPanel.php"; 
    include "choose.php";   
    include "insuranceTerms.php";
    include "calcPhone.php";
    include "personalInfo.php"; 
    include "reviewInfo.php" ;
    include "payment.php"; 
    include "reviewClaim.php";
?>





<!--  footer -->