import AboutUsIcon from "../../images/about-us.png"
import ResultsIcon from "../../images/results.png"
import UpcomingEventsIcon from "../../images/upcoming-events.png"
import SquadIcon from "../../images/squad.png"
import ContactUsIcon from "../../images/contact-us.png"

const items = [
  {
    title: "About Us",
    titleColor: true,
    body: [
      "Waltham Forest United FC are a grassroots football team that play in Division Two of the Hackney & Leyton Football League.",
      "Established in 2014 by our founder and current manager Matthew Perreira.",
    ],
    icon: AboutUsIcon,
    buttonText: "About",
    buttonUrl: "/about-us",
  },
  {
    title: "Results & Table",
    titleColor: false,
    body: [
      "Keep up to date with our recent results and current standings in the table.",
      "Having gained promotion to Division Two for the 2019/20 campaign we will fight to keep our place, and hope for a little more.",
    ],
    icon: ResultsIcon,
    buttonText: "Results",
    buttonUrl: "/results",
  },
  {
    title: "Upcoming Events",
    titleColor: true,
    body: [
      "Interested in the fixture list? Need the address for our training session? Or maybe you want to attend the next big night out?",
      "Take a look at our upcoming events.",
    ],
    icon: UpcomingEventsIcon,
    buttonText: "Upcoming",
    buttonUrl: "/upcoming-events",
  },
  {
    title: "Squad",
    titleColor: false,
    body: [
      "This is the perfect place to find out more about the squad.",
      "Meet the players and more importantly find out who's top of the goal scoring charts.",
    ],
    icon: SquadIcon,
    buttonText: "Squad",
    buttonUrl: "/squad",
  },
  {
    title: "Contact Us",
    titleColor: true,
    body: [
      "We are always on the lookout for new players so if you'd like to come down for a trial then get in touch.",
      "Feel free to send through a message our give us a call.",
    ],
    icon: ContactUsIcon,
    buttonText: "Contact",
    buttonUrl: "/contact-us",
  },
]

export default items
