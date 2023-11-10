<script>
  import toastr from "toastr";
  import "toastr/build/toastr.css";

  let email = "";
  let subject = "";
  let message = "";

  async function handleSubmit(event) {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, subject, message }),
    };

    // @ts-ignore
    const response = await fetch("http://localhost:8080/contact", options);
    const result = await response.json();

    if (response.ok) {
      toastr.info("The message was sent");
      email = "";
      subject = "";
      message = "";
    } else {
      toastr.error("The message wasn't sent. Try again.");
    }
    
  }
</script>

<h3>Contact Page</h3>

<form on:submit={(event) => handleSubmit(event)}>
  <label for="email">Email:</label>
  <input
    type="email"
    name="email"
    placeholder="Your email"
    bind:value={email}
    required
  />
  <br />
  <label for="subject">Subject:</label>
  <input
    type="text"
    name="subject"
    placeholder="Subject..."
    bind:value={subject}
    required
  />
  <br /><br />
  <label for="message" />
  <textarea
    name="message"
    placeholder="Your message..."
    bind:value={message}
    required
    style="width:400px; height:200px"
  />
  <br />
  <button type="submit">Send message</button>
</form>
