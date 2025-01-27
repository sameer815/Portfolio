const Contact = () => (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
      <form className="max-w-md mx-auto bg-white dark:bg-gray-700 rounded-lg p-6 shadow">
        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
        <input id="name" type="text" className="w-full p-2 mb-4 border rounded" />
  
        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
        <input id="email" type="email" className="w-full p-2 mb-4 border rounded" />
  
        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
        <textarea id="message" className="w-full p-2 mb-4 border rounded"></textarea>
  
        <button type="submit" className="w-full  text-white py-2 rounded shadow bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium transition">Send</button>
      </form>
    </section>
  );
  export default Contact;
  