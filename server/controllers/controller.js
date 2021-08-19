import Blog from '../models/blog.js'

export const getAllBlogs = async (req, res) => {
  try {
    const blog = await Blog.find()
      .then((data) => res.send(data))
      .catch((err) => console.log(err.message));

    res.status(200).json({ message: error.message });
  } catch (error) {}
};

export const addNewBlog = (req, res) => {
  let { title, blogContent,reactCount } = req.body;
  let blog = new Blog({
    title,
    blogContent,
    reactCount
  });

  blog
    .save()
    .then((b) => {
      console.log("Blog posted to mongo", b);
      res.send(b);
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "Error Occurred",
      });
    });
};


export const getSingleBlog = async (req, res, next) => {
  let id  = req.params.id;
  Blog.findById(id)
    .then((b) => {
      res.json(b);
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "Error Occurred",
      });
    });
};

export const editReactCount = (req, res) => {
  let { title,
    blogContent,reactCount } = req.body;
  let blog = new Blog({
    title,
    blogContent,
    reactCount
  });

  Book.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $set: {
         title,
        blogContent,
    reactCount
      },
    },
    {
      new: true,
    }
  )
    .then((blog) => {
      // res.json(book);
      res.send(blog)
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "Error Occurred",
      });
  
    });
};


export const editBook = (req, res) => {
  let {
    title,
    writer,
    category,
    almira,
    shelf,
    publisher,
    isbn,
    totalPage,
    yearOfPublication,
    description,
    price,
  } = req.body;
  console.log(req.params)
  
  const id = req.params.id
  console.log(title, writer, id)
  Book.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $set: {
        title,
        writer,
        category,
        almira,
        shelf,
        publisher,
        isbn,
        totalPage,
        yearOfPublication,
        description,
        price,
      },
    },
    {
      new: true,
    }
  )
    .then((book) => {
      // res.json(book);
      res.send(book)
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "Error Occurred",
      });
    });
}

export const deleteBook = (req, res) => {
  let { id } = req.params;
  Book.findOneAndDelete({
    _id: id,
  })
    .then((contact) => {
      res.json(contact);
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "Error Occurred",
      });
    });
 }

export const postAllBook = (req, res) => {
  const allBooks = req.body;

  allBooks.forEach((b) => {
    //   res.send(b);
    let {
      title,
      writer,
      category,
      almira,
      shelf,
      publisher,
      isbn,
      totalPage,
      yearOfPublication,
      description,
      price,
    } = b;
    let book = new Book({
      title,
      writer,
      category,
      almira,
      shelf,
      publisher,
      isbn,
      totalPage,
      yearOfPublication,
      description,
      price,
    });

    book
      .save()
      .then((b) => {
        console.log("posted to mongo", b);
      })
      .catch((e) => {
        console.log(e);
        res.json({
          message: "Error Occurred",
        });
      });
  });
};