import React, { useState, useEffect } from "react";
import xmlParser from "react-xml-parser";
import XMLData from "../xmldata/blog_post.xml";

// const reader = new FileReader();
// console.log(reader.readAsText(XMLData));

function Main() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(XMLData)
      .then((r) => r.text())
      .then((text) => {
        var XMLParser = require("react-xml-parser");
        var xml = new XMLParser().parseFromString(text);
        var posts = xml.getElementsByTagName("blog")[0].children;
        var wholeBlog = "";
        for (var i = 0; i < posts.length; i++) {
          console.log(posts[0].name + i);
          var values = posts[0].children;
          var htmlBody =
            "<div onClick=\"location.href='" +
            values[3].value +
            "';\" class='postval' style='text-align:left; background-color:#304b75;color:white;padding:10px; border-radius:20px'>";
          // var check ="Author: " + values.getElementsByTagName("author").value;
          htmlBody += "Date: " + values[0].value + "<br><br>";
          htmlBody += "Author: " + values[1].value + "<br><br>";
          htmlBody += "Title: " + values[2].value + "<br><br>";
          htmlBody += "Body: " + values[4].value + "<br><br>";
          htmlBody += "</div><br>";
          wholeBlog += htmlBody;
        }
        var sec = document.getElementById("posts_section");
        sec.innerHTML = wholeBlog;
      });
  }, []);
  // .then((data) => {
  //   const parsedData = xmlParser.xml2js(data, {
  //     compact: true,
  //     ignoreComment: true,
  //   });
  //   setPosts(parsedData.blog.posts.post);
  // });
  return <div id="posts_section"></div>;
}

export default Main;
