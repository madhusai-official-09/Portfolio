import { ArrowRight, Section } from "lucide-react"

const certificates = [
    {
      id: 1,
      title: "AWS Certificate",
      image: "/certificates/AWS Certificate.png",
    },
    {
      id: 2,
      title: "AWS Solutions Architecture Job Simulation Certificate",
      image: "/certificates/AWS Solutions Architecture Job Simulation Certificate.png",
    },
    {
      id: 3,
      title: "Blackbucks Full stack",
      image: "/certificates/Blackbucks Full stack.png",
    },
    {
      id: 4,
      title: "Data Analytics Deloitte completion_certificate",
      image: "/certificates/Data Analytics Deloitte completion_certificate.png",
    },
    {
      id: 5,
      title: "Eduexpose Certificate of Training",
      image: "/certificates/Eduexpose Certificate of Training.png",
    },
    {
      id: 6,
      title: "Microsoft AI Azure Certificate",
      image: "/certificates/Microsoft AI Azure Certificate.png",
    },
    {
      id: 7,
      title: "Servicenow Administration Smartinternz Certificate",
      image: "/certificates/Servicenow Administration Smartinternz Certificate.png",
    },
    {
      id: 8,
      title: "ServiceNow Certified System Administrator",
      image: "/certificates/ServiceNow Certified System Administrator.png",
    },
    {
      id: 9,
      title: "TCS ION certificate Softskills",
      image: "/certificates/TCS ION certificate Softskills.png",
    },
  ]
  
  export const CertificatesSection = () => {
    return (
      <section id="certificates" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                My<span className="text-primary"> Certificates</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"> 
                Here are some of my earned certificates. 
                Each certificate highlights my dedication to learning, skill advancement, and professional excellence.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((certificates, key) => (
                        <div key={key} className="group bg-cad rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={certificates.image} alt={certificates.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {}
                                </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{certificates.title}</h3>
                                <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                </div>
                                </div>
                            </div>
                    ))}

                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                    target="_blank"
                    href="https://www.linkedin.com/in/pitanimadhusayi">
                      Check My Linkedin <ArrowRight size={16} />
                    </a>
                </div>
        </div>
      </section>
    )
  }