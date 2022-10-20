import { Card, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getPosts } from "../api/posts";
import { isLoggedIn } from "../helpers/authHelper";
import Loading from "./Loading";
import PostCard from "./PostCard";
import HorizontalStack from "./util/HorizontalStack";
import "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const TopPosts = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const user = isLoggedIn();

  const fetchPosts = async () => {
    const query = { sortBy: "-likeCount" };

    const data = await getPosts(user && user.token, query);

    const topPosts = [];

    if (data && data.data) {
      for (let i = 0; i < 3 && i < data.data.length; i++) {
        topPosts.push(data.data[i]);
      }
    }

    setPosts(topPosts);

    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Stack spacing={2}>
      <Card>
        <HorizontalStack>
          <BsFillPencilFill />
          <Typography>Quick Tips for Writing Your Bytes</Typography>
        </HorizontalStack>
      </Card>
      <Card>
        <HorizontalStack>
          <Typography variant="subtitle" color="text.secondary">
            "I am saying goodbye because..."<br /><br />
            "Saying goodbye makes me feel..."<br /><br />
            "I remember a time when we..."<br /><br />
            "You taught me..."<br /><br />
            "Something I want you to know is..."<br /><br />
            "I will always remember..."
          </Typography>
        </HorizontalStack>
      </Card>
    </Stack>
  );
};

export default TopPosts;
