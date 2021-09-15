<template>
  <div :id="$options.name" class="col-10 mt-0 pt-0">
    <h1>{{$options.name}}</h1>
    <div class="postcard dark blue">
      <div class="card_text">
        <h3>Web Engineer, <span>Nabepero Philippines Inc.</span></h3>
        <div class="card_details"></div>
        <ul class="m-0">
          <li>Develop and/or manage website using the Laravel framework (for backend) and/or javascript frameworks (for frontend)</li>
          <li>Develop management system for major cram school and provide learning management application</li>
          <li>Obtain new learnings together with the entire team as part of the smart goals</li>
        </ul>
      </div>
    </div>

    <div class="postcard dark blue">
      <div class="card_text">
        <h3>Math Content Creator, <span>Photomath Inc.</span></h3>
        <div class="card_details"></div>
        <ul class="m-0">
          <li>Create solving steps with explanations in English for each problem from different math textbooks</li>
          <li>Review solutions contributed by other math experts and provide feedback if necessary</li>
        </ul>
      </div>
    </div>

    <div class="postcard dark blue">
      <div class="card_text">
        <h3>Digital Design Engineer, <span>Wave Computing Inc.</span></h3>
        <div class="card_details"></div>
        <ul class="m-0">
          <li>Design and debug functional blocks and interconnections of various IPs in the process of designing an integrated circuit intended mainly for deep learning and artificial intelligence</li>
          <li>Work as an intern: Trained by the verification team to design I2C bus, and Create software toolchain for automatic register verification (ARV)</li>
        </ul>
      </div>
    </div>

    <div class="postcard dark blue">
      <div class="card_text">
        <h3>Software Engineer, <span>Kyocera Document Solutions Development Philippines Inc.</span></h3>
        <div class="card_details"></div>
        <ul class="m-0">
          <li>Design and debug firmware/software for a multifunctional printer (MFP) particularly the scanner function and functions related to it following the software development life cycle</li>
          <li>Fix bugs reported by QA as JIRA issues and document the fix for future reference</li>
          <li>Test printer functional implementations and report bugs if there are bugs found during testing</li>
        </ul>
      </div>
    </div>

    <div class="postcard dark blue">
      <div class="card_text">
        <h3>Faculty, College of Electronics Engineering, <span>University of Cebu - Banilad</span></h3>
        <div class="card_details"></div>
          <ul class="m-0">
            <li>Teach various engineering subjects such as engineering mathematics, digital communications, embedded software programming, circuits and electronics, etc.</li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Experience',
}
</script>

<style scoped lang="scss">
@import "../assets/scss/postcard.scss";

h1 {
  font-size: 3.5rem;
  line-height: 4rem;
  font-weight: 700;
}

h3 {
  margin: 0px;
}

h3 > span {
  --bs-text-opacity: 0.1;
  color: rgba(var(--bs-info-rgb),var(--bs-bg-opacity))!important;
  font-weight: 600;
}

.postcard {
  max-height: 80px;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out; 

  .card_details {
    --bs-bg-opacity: 0.8;
    background-color: rgba(var(--bs-info-rgb),var(--bs-bg-opacity))!important;
    width: 50px;
    height: 2px;
    margin: 10px 0;
    border-radius: 5px;
    opacity: 0;
    transition: width 0.5s ease 0.05s, opacity 0.5s ease 0.05s;
  }

  &:hover {
    max-height: 300px!important;
  }

  &:hover .card_details {
    opacity: 1!important;
    width: 100px!important;
  }
}

.card_text {
  padding: 1.5rem;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
