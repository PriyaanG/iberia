import Navbar from 'react-bootstrap/Navbar';

export default function IberiaNavbar() {
  return (
    <Navbar className="bg-body-tertiary navbar">
      <Navbar.Brand href="/iberia/index.html">
        <img
          alt="Iberia Logo"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F12%2FIberia-Logo.png&f=1&nofb=1&ipt=98bc1e4a84db1d8064372ea50d79aae7cc5af3903a7ffdde301ae9ebaf4b594c"
          width="130"
          height="85"
          className="d-inline-block align-top"
        />
        <span style={{ marginLeft: "10px" }}>Virtual</span>
      </Navbar.Brand>

      <div className="buttons-container">
        <button className="button">Careers</button>
        <button className="button">Server</button>
        <button className="button">About Us</button>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F007%2F409%2F979%2Foriginal%2Fpeople-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg&f=1&nofb=1&ipt=5178d8a2d8c290432f4eb476c65ae371ab825b95ee59c80ec1d4c954f1293c9b"
          alt="Person Icon"
          width="35"
          height="35"
          style={{ marginLeft: "5%" }}
        />
      </div>
    </Navbar>
  );
}
