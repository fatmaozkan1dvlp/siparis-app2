import { useState } from "react";
import { useNavigate } from "react-router-dom";



function AddOrder() {
  const [form, setForm] = useState({
    title: "",
    orderType: "",
    logo: "",
    colors: "",
    notes: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${import.meta.env.VITE_API_URL}/api/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({
    title: "",
    orderType: "",
    logo: "",
    colors: "",
    notes: "",
  });
  alert("Sipariş eklendi");
    navigate("/");
    
  };

  return (
    <div style={styles.container}>
      <h2>Sipariş Ekle</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input name="title" style={styles.input} value={form.title} placeholder="Başlık" onChange={handleChange} required />
        <input name="orderType" style={styles.input} value={form.orderType} placeholder="Sipariş Türü" onChange={handleChange} />
        <input name="logo" style={styles.input} value={form.logo} placeholder="Logo" onChange={handleChange} />
        <input name="colors" style={styles.input} value={form.colors} placeholder="Renkler" onChange={handleChange} />
        <textarea name="notes" style={styles.textarea} value={form.notes} placeholder="Notlar" onChange={handleChange} />
        <button style={styles.button}>Kaydet</button>
      </form>
    </div>
  );
}
const styles = {
  container: {
    padding: "20px",
    maxWidth: "500px",
    margin: "0 auto",
  },
  form: {
    background: "#fff",
    padding: "20px",
    borderRadius: "14px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
  },
  textarea: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    minHeight: "80px",
  },
  button: {
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    background: "#333",
    color: "#fff",
    fontSize: "15px",
    cursor: "pointer",
  },
};


export default AddOrder;
