const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    position: "relative",
    height: "60px",
    padding: `0 ${theme.spacing(3)}px`,
    background: theme.palette.common.nova,
    marginBottom: theme.spacing(1) * 4.5,
    "&:last-of-type": {
      marginBottom: "0"
    }
  },
  filled__root__label: {
    transform: "translateY(-28px)"
  },
  input: {
    ...theme.typography.bold,
    borderBottom: "1px solid transparent",
    outline: "none",
    fontSize: "18px"
  },
  root__filled__root__input: {
    borderBottomColor: theme.palette.common.nova
  },
  root_focus_within__root__input: {
    borderBottomColor: theme.palette.common.nova
  },
  root__input__placeholder: {
    color: "astroneer-moonlight",
    fontSize: "18px"
  },
  root__error: {
    color: "astroneer-rover"
  }
});

// .root {
//   display: flex;
//   flex-direction: column;
//   flex-wrap: nowrap;
//   justify-content: center;
//   position: relative;
//   height: 60px;
//   padding: 0 30px;
//   background: astroneer-nova;
//   margin-bottom: bottomMargin;
// }

// .root:last-of-type {
//   margin-bottom: 0;
// }

// .root__label {
//   position: absolute;
//   padding: 0 8px;
//   background: astroneer-nova;
//   composes: astroneerSansSerif--medium;
//   font-size: 14px;
//   color: astroneer-asteroid;
//   transform: translateY(0);
//   transition: transform fastest-transition;
// }

// .root--filled .root__label,
// .root:focus-within .root__label {
//   transform: translateY(-28px);
// }

// .root__input {
//   composes: astroneerSansSerif--bold;
//   border-bottom: 1px solid transparent;
//   outline: none;
//   font-size: 18px;
// }

// .root--filled .root__input,
// .root:focus-within .root__input {
//   border-bottom-color: astroneer-nova;
// }

// .root__input::placeholder {
//   color: astroneer-moonlight;
//   font-size: 18px;
// }

// .root--error {
//   color: astroneer-rover;
// }

export default styles;
