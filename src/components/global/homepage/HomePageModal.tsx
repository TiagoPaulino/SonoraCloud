import Link from "next/link";
import Image from "next/image";

export default function HomePageModal() {
    return (
        <div style={ContainerStyles}>
                <Image src="/img/home_cover.jpg" height={1000} width={1000} alt="SonoraCloud Logo"
                    style={
                        {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            zIndex: -1
                        }
                    }
                />
                <div style={ModalStyles}>
                    <Image src="/img/logo.png" height={300} width={300} alt="SonoraCloud Logo"/>
                    <h1 style={{ fontSize: "24px", margin: "0"}}>SonoraCloud.com</h1>
                    <small>beta</small>
                    <p style={{ fontSize: "16px", marginBottom: "20px"}}>Todas as suas músicas em um só lugar</p>
                    <Link href="/home"
                        style={{ 
                            textDecoration: "none",  
                            padding: "10px 20px",
                            borderRadius: "50px",
                            backgroundColor: "white",
                            color: "black",
                            transition: "all 0.3s ease-in-out",
                            fontWeight: "bold"
                        }
                        }
                    >Acessar a SonoraCloud</Link>
                </div>          
        </div>
    )
}

const ContainerStyles: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    fontFamily: "'Poppins', sans-serif",
    color: "white",
    gap: "20px"
};

const ModalStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    marginBottom: "100px"
};
