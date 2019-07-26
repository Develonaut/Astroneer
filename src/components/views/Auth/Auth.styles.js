import splashMask from "images/svgs/AuthSplash__mask.svg";

const styles = theme => ({
  root: {
    display: "grid",
    height: "100%",
    gridTemplateColumns: "100% 0",
    background: theme.palette.common.nova
  },
  hero: {
    overflow: "hidden",
    display: "inline-flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: theme.palette.common.flare,
    position: "relative",
    "&:before": {
      content: "''",
      width: "0",
      height: "105%",
      marginLeft: "-10px",
      background: `url(${splashMask}) no-repeat`,
      backgroundPosition: "center top",
      backgroundSize: "cover",
      padding: "0",
      paddingRight: "22%"
    }
  },
  heroIllustration: {
    display: "block",
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
    minWidth: "800px",
    zIndex: theme.zIndex.AuthHero,
    paddingRight: "40px"
  },
  [`@media screen and (min-width: calc(${
    theme.mediaQueries.mobile
  } - 20px))`]: {
    root: {
      gridTemplateColumns: `minmax(calc(${
        theme.mediaQueries.mobile
      } - 20px), 715px) auto`
    }
  }
});

export default styles;
