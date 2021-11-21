// Switch statement to be used for theming based on a team.

// colorcodes found at https://teamcolorcodes.com/nba-team-color-codes/

export const teamInfo = (team) => {
  switch (team) {
    case "ATL":
      return {
        colors: {
          colorOne: "#E03A3E",
          colorTwo: "#C1D32F",
        },
      };
    case "BOS":
      return {
        colors: {
          colorOne: "#007A33",
          colorTwo: "#BA9653",
        },
      };
    case "BKN":
      return {
        colors: {
          colorOne: "#000000",
          colorTwo: "#FFFFFF",
        },
      };
    case "CHA":
      return {
        colors: {
          colorOne: "#1D1160",
          colorTwo: "#00788C",
        },
      };
    case "CHI":
      return {
        colors: {
          colorOne: "#CE1141",
          colorTwo: "#000000",
        },
      };

    case "CLE":
      return {
        colors: {
          colorOne: "#860038",
          colorTwo: "#041E42",
        },
      };
    case "DAL":
      return {
        colors: {
          colorOne: "#00538C",
          colorTwo: "#002B5E",
        },
      };
    case "DEN":
      return {
        colors: {
          colorOne: "#0E2240",
          colorTwo: "#FEC524",
        },
      };
    case "GSW":
      return {
        colors: {
          colorOne: "#1D428A",
          colorTwo: "#FFC72C",
        },
      };
    case "HOU":
      return {
        colors: {
          colorOne: "#CE1141",
          colorTwo: "#000000",
        },
      };
    case "IND":
      return {
        colors: {
          colorOne: "#002D62",
          colorTwo: "#FDBB30",
        },
      };
    case "LAC":
      return {
        colors: {
          colorOne: "#C8102E",
          colorTwo: "#1D428A",
        },
      };
    case "LAL":
      return {
        colors: {
          colorOne: "#552583",
          colorTwo: "#FDB927",
        },
      };
    case "MEM":
      return {
        colors: {
          colorOne: "#5D76A9",
          colorTwo: "#12173F",
        },
      };
    case "MIA":
      return {
        colors: {
          colorOne: "#98002E",
          colorTwo: "#F9A01B",
        },
      };
    case "MIL":
      return {
        colors: {
          colorOne: "#00471B",
          colorTwo: "#EEE1C6",
        },
      };
    case "MIN":
      return {
        colors: {
          colorOne: "#0C2340",
          colorTwo: "#236192",
        },
      };
    case "NOP":
      return {
        colors: {
          colorOne: "#0C2340",
          colorTwo: "#C8102E",
        },
      };
    case "NYK":
      return {
        colors: {
          colorOne: "#006BB6",
          colorTwo: "#F58426",
        },
      };
    case "OKC":
      return {
        colors: {
          colorOne: "#007AC1",
          colorTwo: "#EF3B24",
        },
      };
    case "ORL":
      return {
        colors: {
          colorOne: "#0077C0",
          colorTwo: "#C4CED4",
        },
      };
    case "PHI":
      return {
        colors: {
          colorOne: "#006BB6",
          colorTwo: "#ED174C",
        },
      };
    case "POR":
      return {
        colors: {
          colorOne: "#E03A3E",
          colorTwo: "#000000",
        },
      };
    case "SAC":
      return {
        colors: {
          colorOne: "#5A2D81",
          colorTwo: "#63727A",
        },
      };
    case "SAS":
      return {
        colors: {
          colorOne: "#C4CED4",
          colorTwo: "#000000",
        },
      };
    case "TOR":
      return {
        colors: {
          colorOne: "#CE1141",
          colorTwo: "#000000",
        },
      };
    case "UTA":
      return {
        colors: {
          colorOne: "#002B5C",
          colorTwo: "#00471B",
        },
      };
    case "WAS":
      return {
        colors: {
          colorOne: "#002B5C",
          colorTwo: "#E31837",
        },
      };
    default:
      return {
        colors: {
          colorOne: "#000",
          colorTwo: "#FFF",
        },
      };
  }
};
