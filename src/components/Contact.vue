<template>
  <section class="contact">
    <div class="container-fluid">
      <h1
        class="display-1 text-center text-light p-3 text-decoration-underline"
      >
        Contact Us!
      </h1>
    </div>
    <div class="container-fluid contactsForm">
      <form action="https://formspree.io/f/xyyaoapj" method="POST">
        <div class="mb-1 p-3 mt-4">
          <label for="exampleFormControlInput1" class="form-label text-white"
            >First Name:</label
          >
          <input
            type="First Name"
            name="First Name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
          />
        </div>
        <div class="mb-1 p-3">
          <label for="exampleFormControlInput1" class="form-label text-white"
            >Last Name:</label
          >
          <input
            type="Last Name"
            name="Last Name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Surname
            "
          />
        </div>
        <div class="mb-3 p-3">
          <label for="exampleFormControlInput1" class="form-label text-white"
            >Email address:</label
          >
          <input
            type="email"
            name="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3 p-3">
          <label for="exampleFormControlTextarea1" class="form-label text-white"
            >Please leave a message:</label
          >
          <textarea
            name="message"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <div class="btns">
            <button class="formButton mt-3 butn1" type="submit">Send</button>
            <button class="formButton mt-3 butn2" type="reset">Clear</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped></style>
