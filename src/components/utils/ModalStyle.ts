export const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    maxwidth: "90vw",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
    outline: "none",
    border: "none",
    maxHeight: "80vh",
    overflowY: "scroll" as "scroll",
    "&::-webkit-scrollbar": {
        width: "0.4em"
    },
    "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,.1)",
        outline: "1px solid slategrey"
    },
    display: "flex",
    flexDirection: "column" as "column",
    gap: "1rem",
    overflowX: "hidden" as "hidden",

};
