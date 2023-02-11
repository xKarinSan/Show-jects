import React, { useState } from "react";
import {
    Card,
    Grid,
    Typography,
    Button,
    Badge,
    Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShareDialog from "./ShareDialog";

// icons
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CreateIcon from "@mui/icons-material/Create";
import ShareIcon from "@mui/icons-material/Share";

// helper function
import { formatDate } from "../../HelperFunctions/dateFormats";
import ProjectIcon from "../../Images/defaultproject.png"

function ProjectContainer({
    project,
    isOwner,
    userId,
    handleLike,
    handleDelete,
}) {
    const {
        _id,
        projectName,
        projectDescription,
        projectPicture,
        likes,
        comments,
        status,
        addedDate,
        userId: ownerId,
        username,
    } = project;
    const userProfileUrl = `${process.env.REACT_APP_UI_LINK}user/profile/${ownerId}`;
    const [openDialog, setOpenDialog] = useState(false);
    const statuses = [
        "Getting User Feedback",
        "Finding Manpower",
        "Finding Investors",
    ];

    return (
        <>
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <Card sx={{ margin: "10px", padding: "10px" }}>
                    <Paper>
                        <img
                            object-fit="cover"
                            className={"projectImageContainer"}
                            src={projectPicture.url?projectPicture.url:ProjectIcon}
                            style={{
                                maxWidth: "100%",
                            }}
                        />
                    </Paper>
                    <Typography variant={"h5"} textAlign={"left"}>
                        {projectName}
                    </Typography>
                    {isOwner && userId == ownerId ? (
                        <></>
                    ) : (
                        <>
                            {" "}
                            <Typography variant={"h6"} textAlign={"left"}>
                                By:{" "}
                                <a href={userProfileUrl} target={"_blank"}>
                                    {username}
                                </a>
                            </Typography>
                        </>
                    )}

                    <Typography variant={"subtitle2"} textAlign={"left"}>
                        {projectDescription}
                    </Typography>
                    <Typography variant={"subtitle2"} textAlign={"left"}>
                        {formatDate(addedDate)}
                    </Typography>

                    <Badge
                        badgeContent={statuses[status]}
                        color="primary"
                        sx={{
                            "& .MuiBadge-badge": {
                                width: "max-content",
                                background: "#0cb268",
                            },
                        }}
                    />
                    <hr />
                    {!userId ? (
                        <>
                            <Grid container spacing={2}>
                                <Grid
                                    item
                                    xs={4}
                                    sx={{
                                        margin: "auto",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    {likes.length} <FavoriteBorderIcon />
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                    sx={{
                                        margin: "auto",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    {comments.length} <ChatBubbleOutlineIcon />
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                    sx={{
                                        margin: "auto",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Button
                                        variant={"filled"}
                                        onClick={() => {
                                            setOpenDialog(true);
                                        }}
                                    >
                                        <ShareIcon />
                                    </Button>
                                </Grid>
                            </Grid>
                        </>
                    ) : (
                        <>
                            <Grid container spacing={2}>
                                <Grid
                                    item
                                    xs={4}
                                    sx={{
                                        margin: "auto",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Button
                                        variant={"filled"}
                                        onClick={async () => {
                                            await handleLike(_id, userId);
                                        }}
                                    >
                                        <Link
                                            style={{
                                                color: "black",
                                                textDecoration: "none",
                                            }}
                                        >
                                            {likes.length}
                                            {likes.includes(userId) ? (
                                                <>
                                                    <FavoriteIcon
                                                        sx={{
                                                            color: "red",
                                                        }}
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    <FavoriteBorderIcon />
                                                </>
                                            )}
                                        </Link>
                                    </Button>
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                    sx={{
                                        margin: "auto",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Button variant={"filled"}>
                                        <Link
                                            to={`/projects/${_id}`}
                                            style={{
                                                color: "black",
                                                textDecoration: "none",
                                            }}
                                        >
                                            {comments.length}{" "}
                                            <ChatBubbleOutlineIcon />
                                        </Link>
                                    </Button>
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                    sx={{
                                        margin: "auto",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Button
                                        variant={"filled"}
                                        onClick={() => {
                                            setOpenDialog(true);
                                        }}
                                    >
                                        <ShareIcon />
                                    </Button>
                                </Grid>
                            </Grid>
                        </>
                    )}

                    {/* edit/delete */}
                    {isOwner ? (
                        <>
                            <hr />
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Button
                                        variant={"filled"}
                                        sx={{
                                            padding: "5px",
                                            width: "100%",
                                        }}
                                    >
                                        <Link
                                            to={`/projects/edit/${_id}`}
                                            style={{
                                                color: "black",
                                                textDecoration: "none",
                                                padding: "0",
                                            }}
                                        >
                                            <CreateIcon />
                                        </Link>
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button
                                        variant={"filled"}
                                        sx={{
                                            color: "black",
                                            padding: "5px",
                                            width: "100%",
                                        }}
                                        onClick={() => {
                                            handleDelete(_id);
                                        }}
                                    >
                                        <Link
                                            style={{
                                                color: "black",
                                                textDecoration: "none",
                                                padding: "0",
                                            }}
                                        >
                                            <DeleteOutlineIcon />
                                        </Link>
                                    </Button>
                                </Grid>
                            </Grid>
                        </>
                    ) : (
                        <>
                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                                to={`/projects/${_id}`}
                            >
                                <Button
                                    variant={"filled"}
                                    sx={{
                                        background: "#309F6E",
                                        width: "100%",
                                        margin: "10px auto",
                                        padding: "10px",
                                        "&:hover": {
                                            background: "green",
                                        },
                                    }}
                                >
                                    See More
                                </Button>
                            </Link>
                        </>
                    )}
                </Card>
            </Grid>
            <ShareDialog
                handleClose={() => setOpenDialog(false)}
                isOpen={openDialog}
                projectId={_id}
                projectName={projectName}
            />
        </>
    );
}

export default ProjectContainer;
