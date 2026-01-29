import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div style={styles.nav}>
      <div style={styles.brand}>MODAXA 3D<span style={styles.brandAccent}></span></div>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Siparişler</Link>
        <Link to="/add" style={styles.linkPrimary}>Sipariş Ekle</Link>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    background: "#fff",
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: "600",
    fontSize: "18px",
    color: "#333",
  },
  brandAccent: {
    marginLeft: "4px",
    color: "#7a7a7a",
    fontWeight: 500,
  },
  
  links: {
    display: "flex",
    gap: "10px",
  },
  link: {
    padding: "6px 12px",
    borderRadius: "8px",
    textDecoration: "none",
    color: "#444",
    background: "#f3f3f3",
  },
  linkPrimary: {
    padding: "6px 12px",
    borderRadius: "8px",
    textDecoration: "none",
    color: "#fff",
    background: "#333",
  },
};


export default Navbar;
