import { FaSearch, FaThermometerHalf, FaTools } from "react-icons/fa";
import { FaWater } from "react-icons/fa6";
import { MdPlumbing, MdSensors } from "react-icons/md";

export default function ServicesSection() {
	return (
		<section id="services-section" className="px-4 md:px-16 py-16 bg-background-light-gray flex flex-col items-center gap-8">
            <ServicesHeader />
            <ServicesCards />
        </section>
	);
}

function ServicesHeader() {
	return (
		<div className="flex flex-col items-center px-2 gap-4 text-center max-w-[min(65ch,100%)]">
			<h2 className="uppercase font-semibold text-sm text-brand-primary">O que fazemos</h2>
			<h1 className="capitalize text-3xl font-bold">Nossos serviços</h1>
			<p className="text-text-muted ">
				Somos especialistas em encanamentos de água e esgoto. Utilizamos tecnologia avançada e métodos não
				destrutivos para encontrar e resolver vazamentos.
			</p>
		</div>
	);
}
const services = [
    {
      icon: <FaSearch size={32} />,
      title: "Detecção de Vazamentos",
      desc: "Localização precisa de vazamentos em tubulações de água e esgoto, em lajes, paredes e pisos, utilizando equipamentos de última geração.",
    },
    {
      icon: <MdSensors size={32} />,
      title: "Geofone Eletrônico",
      desc: "Tecnologia de escuta amplificada para detectar vazamentos ocultos em encanamentos de água e esgoto sem necessidade de quebra.",
    },
    {
      icon: <FaThermometerHalf size={32} />,
      title: "Câmera Termográfica",
      desc: "Identificação de vazamentos em tubulações através de variação de temperatura nas superfícies, com total precisão.",
    },
    {
      icon: <FaWater size={32} />,
      title: "Teste de Estanqueidade",
      desc: "Teste de pressão em tubulações de água e esgoto para verificar a integridade do sistema hidráulico.",
    },
    {
      icon: <MdPlumbing size={32} />,
      title: "Reparo de Encanamentos",
      desc: "Após a detecção, realizamos o reparo em encanamentos de água e esgoto com mínima intervenção e máxima eficiência.",
    },
    {
      icon: <FaTools size={32} />,
      title: "Manutenção Preventiva",
      desc: "Inspeção periódica de encanamentos de água e esgoto para prevenir vazamentos e desperdício.",
    },
  ];

function ServicesCards(){
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {services.map((service, index) => (
                <ServicesCard key={index} icon={service.icon} title={service.title} desc={service.desc} />
            ))}
        </div>
    );
}

interface ServicesCardProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

function ServicesCard({ icon, title, desc }: ServicesCardProps) {
    return (
        <div className=" flex items-start flex-col gap-4 p-6 bg-background-white border border-border-gray-light! rounded-lg shadow-md">
            <div className="p-4 bg-background-blue-subtle rounded-xl text-brand-primary">
                {icon}
            </div>
            <h3 className="text-lg font-semibold ">{title}</h3>
            <p className="text-text-muted font-light">{desc}</p>
        </div>
    );
}