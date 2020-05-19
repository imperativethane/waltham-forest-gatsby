import ResultsIcon from "../../images/results.png"
import UpcomingEventsIcon from "../../images/upcoming-events.png"
import SquadIcon from "../../images/squad.png"

const items = [
  {
    title: "Results",
    titleColor: false,
    body: [
      "Keep up to date with our recent results and current standings in the table.",
      "Having gained promotion to Division Two for the 2019/20 campaign we will fight to keep our place, and hope for a little more.",
    ],
    icon: ResultsIcon,
    buttonText: "Results",
    buttonUrl: "/manager/results",
  },
  {
    title: "Upcoming Events",
    titleColor: true,
    body: [
      "Need to organise a training session or announce the next big night out?",
      "Go to the Upcoming Events page.",
    ],
    icon: UpcomingEventsIcon,
    buttonText: "Upcoming",
    buttonUrl: "/manager/upcoming-events",
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
    buttonUrl: "/manager/squad",
  },
]

export default items
