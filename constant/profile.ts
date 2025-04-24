import { Cake, Mail, Phone, MapPin } from "lucide-react";

export const profile = {
  avatar: "https://your-avatar-link.com/avatar.jpg",
  cover: "https://your-cover-link.com/cover.jpg",
  fullName: "Ulil Absor",
  nickname: "Ulil",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget lorem ac nulla volutpat feugiat. Nulla facilisi. Curabitur nec libero euismod, pellentesque nulla ut, tincidunt justo. Aenean at diam vel urna semper fermentum.",
  cv: "https://your-cv-link.com",
  contacts: [
    { icon: Cake, label: "Birthday", value: "24 January 2007", href: "#" },
    {
      icon: Mail,
      label: "Email",
      value: "aulil2427@gmail.com",
      href: "mailto:aulil2427@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 857-7069-7274",
      href: "tel:+6285770697274",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Central Java, Indonesia",
      href: "https://www.google.com/maps/search/Central+Java,+Indonesia",
    },
  ],
};
