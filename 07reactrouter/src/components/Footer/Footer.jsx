function Footer(){
  return(
    <div className="px-2">
      <div className="flex justify-around shadow-lg">
        <a href="">Logo</a>
        <div className="flex gap-10">
        <ul>
          <li>Resources</li>
          <li>Home</li>
          <li>About</li>
        </ul>
        <ul>
          <li>Follow Us</li>
          <li>Github</li>
          <li>Discord</li>
        </ul>
        <ul>
          <li>Legal</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
        </div>
      </div>
      <div className="flex justify-between">
        <p>&copy; 2024sumitkothalkar. All Rights Reserved</p>
        <ul className="flex gap-1">
          <li>fb</li>
          <li>dis</li>
          <li>twi</li>
          <li>git</li>
          <li>lin</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;