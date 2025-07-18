// Roadmap data for various subjects

const roadmaps = {
    dsa: {
        title: "Data Structures & Algorithms Roadmap",
        description: "Master problem-solving with efficient data structures and algorithms.",
        sections: [
            {
                title: "1. Foundational Concepts",
                items: [
                    {
                        title: "Time & Space Complexity",
                        description: "Understanding how to measure the efficiency of algorithms.",
                        resources: [
                            { type: "video", title: "Big O Notation", url: "https://www.youtube.com/watch?v=v4cd1O4zkGw" },
                            { type: "docs", title: "Analysis of Algorithms", url: "https://www.geeksforgeeks.org/analysis-of-algorithms-big-o-analysis/" }
                        ]
                    },
                    {
                        title: "Arrays & Strings",
                        description: "Fundamental data structures for storing sequential data.",
                        resources: [
                            { type: "video", title: "Arrays Tutorial", url: "https://www.youtube.com/watch?v=kQDxmjfkIKY" },
                            { type: "docs", title: "Array Data Structure", url: "https://www.geeksforgeeks.org/array-data-structure/" },
                            { type: "practice", title: "LeetCode Problems", url: "https://leetcode.com/explore/learn/card/array-and-string/" }
                        ]
                    }
                ]
            },
            {
                title: "2. Basic Data Structures",
                items: [
                    {
                        title: "Linked Lists",
                        description: "A linear data structure where elements are not stored at contiguous memory locations.",
                        resources: [
                            { type: "video", title: "Linked Lists in 100 Seconds", url: "https://www.youtube.com/watch?v=N6dFstHh_e8" },
                            { type: "docs", title: "GeeksforGeeks Linked List", url: "https://www.geeksforgeeks.org/data-structures/linked-list/" },
                            { type: "practice", title: "HackerRank Linked Lists", url: "https://www.hackerrank.com/domains/data-structures/linked-lists" }
                        ]
                    },
                    {
                        title: "Stacks & Queues",
                        description: "Abstract data types that serve as collections of elements.",
                        resources: [
                            { type: "video", title: "Stacks and Queues", url: "https://www.youtube.com/watch?v=zbnJJkM-6wA" },
                            { type: "docs", title: "GeeksforGeeks Stack", url: "https://www.geeksforgeeks.org/stack-data-structure/" },
                            { type: "practice", title: "LeetCode Stacks", url: "https://leetcode.com/tag/stack/" }
                        ]
                    }
                ]
            },
            {
                title: "3. Trees & Graphs",
                items: [
                    {
                        title: "Binary Trees & BSTs",
                        description: "Hierarchical data structures that store data in a tree-like fashion.",
                        resources: [
                            { type: "video", title: "Binary Search Tree", url: "https://www.youtube.com/watch?v=pYT9F8_LFTM" },
                            { type: "docs", title: "GeeksforGeeks Binary Tree", url: "https://www.geeksforgeeks.org/binary-tree-data-structure/" },
                            { type: "practice", title: "LeetCode Trees", url: "https.leetcode.com/tag/tree/" }
                        ]
                    },
                    {
                        title: "Graph Traversal",
                        description: "Algorithms for visiting all the nodes of a graph.",
                        resources: [
                            { type: "video", title: "BFS and DFS", url: "https://www.youtube.com/watch?v=pcKY4hjJ_0" },
                            { type: "docs", title: "GeeksforGeeks Graph Traversal", url: "https://www.geeksforgeeks.org/graph-and-its-representations/" },
                            { type: "practice", title: "HackerRank Graphs", url: "https://www.hackerrank.com/domains/algorithms/graph-theory" }
                        ]
                    }
                ]
            },
            {
                title: "4. Sorting & Searching",
                items: [
                    {
                        title: "Merge Sort & Quick Sort",
                        description: "Efficient comparison-based sorting algorithms.",
                        resources: [
                            { type: "video", title: "Merge Sort vs Quick Sort", url: "https://www.youtube.com/watch?v=es2T6KY45cA" },
                            { type: "docs", title: "GeeksforGeeks Sorting", url: "https://www.geeksforgeeks.org/sorting-algorithms/" },
                            { type: "practice", title: "HackerRank Sorting", url: "https://www.hackerrank.com/domains/algorithms/sorting" }
                        ]
                    },
                    {
                        title: "Binary Search",
                        description: "A fast search algorithm with a time complexity of O(log n).",
                        resources: [
                            { type: "video", title: "Binary Search Algorithm", url: "https://www.youtube.com/watch?v=6ysjqYsc3hA" },
                            { type: "docs", title: "GeeksforGeeks Binary Search", url: "https://www.geeksforgeeks.org/binary-search/" },
                            { type: "practice", title: "LeetCode Binary Search", url: "https://leetcode.com/tag/binary-search/" }
                        ]
                    }
                ]
            },
            {
                title: "5. Dynamic Programming",
                items: [
                    {
                        title: "Memoization & Tabulation",
                        description: "An optimization over plain recursion.",
                        resources: [
                            { type: "video", title: "Dynamic Programming - 5 Steps", url: "https://www.youtube.com/watch?v=oBt53YbR9Kk" },
                            { type: "docs", title: "GeeksforGeeks DP", url: "https://www.geeksforgeeks.org/dynamic-programming/" },
                            { type: "practice", title: "LeetCode Dynamic Programming", url: "https://leetcode.com/tag/dynamic-programming/" }
                        ]
                    }
                ]
            }
        ]
    },
    web: {
        title: "Web Development Roadmap",
        description: "A complete guide to becoming a full-stack web developer.",
        sections: [
            {
                title: "1. Frontend Fundamentals",
                items: [
                    {
                        title: "HTML, CSS, & JavaScript",
                        description: "The core building blocks of all websites.",
                        resources: [
                            { type: "video", title: "Full Course for Beginners", url: "https://www.youtube.com/watch?v=G3e-cpL7ofc" },
                            { type: "docs", title: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web" },
                            { type: "practice", title: "freeCodeCamp", url: "https://www.freecodecamp.org/learn/responsive-web-design/" }
                        ]
                    }
                ]
            },
            {
                title: "2. Frontend Frameworks",
                items: [
                    {
                        title: "React",
                        description: "A popular JavaScript library for building user interfaces.",
                        resources: [
                            { type: "video", title: "React in 100 Seconds", url: "https://www.youtube.com/watch?v=Tn6-PIqc4UM" },
                            { type: "docs", title: "Official React Docs", url: "https://react.dev/" },
                            { type: "practice", title: "freeCodeCamp React", url: "https://www.freecodecamp.org/learn/front-end-development-libraries/" }
                        ]
                    }
                ]
            },
            {
                title: "3. Backend Development",
                items: [
                    {
                        title: "Node.js & Express",
                        description: "A JavaScript runtime and a minimal and flexible Node.js web application framework.",
                        resources: [
                            { type: "video", title: "Node.js and Express Course", url: "https://www.youtube.com/watch?v=Oe421EPjeBE" },
                            { type: "docs", title: "Express.js Docs", url: "https://expressjs.com/" },
                            { type: "practice", title: "freeCodeCamp Backend", url: "https://www.freecodecamp.org/learn/back-end-development-and-apis/" }
                        ]
                    }
                ]
            },
            {
                title: "4. Databases",
                items: [
                    {
                        title: "SQL & NoSQL",
                        description: "Learn both relational and non-relational databases.",
                        resources: [
                            { type: "video", title: "SQL vs NoSQL", url: "https://www.youtube.com/watch?v=cODCpXt-L1I" },
                            { type: "docs", title: "GeeksforGeeks Databases", url: "https://www.geeksforgeeks.org/sql-tutorial/" },
                            { type: "practice", title: "SQLBolt", url: "https://sqlbolt.com/" }
                        ]
                    }
                ]
            },
            {
                title: "5. Version Control",
                items: [
                    {
                        title: "Git & GitHub",
                        description: "A distributed version control system and a platform for hosting and collaborating on Git repositories.",
                        resources: [
                            { type: "video", title: "Git and GitHub for Beginners", url: "https://www.youtube.com/watch?v=RGOj5yH7evk" },
                            { type: "docs", title: "GitHub Docs", url: "https://docs.github.com/en" },
                            { type: "practice", title: "Learn Git Branching", url: "https://learngitbranching.js.org/" }
                        ]
                    }
                ]
            }
        ]
    },
    ml: {
        title: "Machine Learning Roadmap",
        description: "Master AI and machine learning concepts with practical applications.",
        sections: [
            {
                title: "1. Python for Machine Learning",
                items: [
                    {
                        title: "NumPy, Pandas, Matplotlib",
                        description: "Essential libraries for data manipulation, analysis, and visualization.",
                        resources: [
                            { type: "video", title: "Python for ML Course", url: "https://www.youtube.com/watch?v=HGOBQPFzWKo" },
                            { type: "docs", title: "Pandas Documentation", url: "https://pandas.pydata.org/docs/" },
                            { type: "practice", title: "Kaggle", url: "https://www.kaggle.com/learn/python" }
                        ]
                    }
                ]
            },
            {
                title: "2. Supervised Learning",
                items: [
                    {
                        title: "Regression & Classification",
                        description: "Predicting continuous values and classifying data into categories.",
                        resources: [
                            { type: "video", title: "StatQuest: Machine Learning", url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF" },
                            { type: "docs", title: "Scikit-Learn User Guide", url: "https://scikit-learn.org/stable/user_guide.html" },
                            { type: "practice", title: "Kaggle Competitions", url: "https://www.kaggle.com/competitions" }
                        ]
                    }
                ]
            },
            {
                title: "3. Unsupervised Learning",
                items: [
                    {
                        title: "Clustering & Dimensionality Reduction",
                        description: "Grouping unlabeled data and reducing the number of random variables under consideration.",
                        resources: [
                            { type: "video", title: "StatQuest: PCA and K-Means", url: "https://www.youtube.com/watch?v=FgakZw6K1QQ" },
                            { type: "docs", title: "Scikit-Learn Clustering", url: "https://scikit-learn.org/stable/modules/clustering.html" },
                            { type: "practice", title: "Kaggle Datasets", url: "https://www.kaggle.com/datasets" }
                        ]
                    }
                ]
            }
        ]
    },
    dl: {
        title: "Deep Learning Roadmap",
        description: "An in-depth guide to the world of deep neural networks.",
        sections: [
            {
                title: "1. Introduction to Deep Learning",
                items: [
                    {
                        title: "Deep vs. Shallow Networks",
                        description: "Understanding the fundamental differences and advantages of deep architectures.",
                        resources: [
                            { type: "video", title: "Deep Learning Simply Explained", url: "https://www.youtube.com/watch?v=6M5VXKLf4D4" },
                            { type: "docs", title: "Deep Learning Book", url: "https://www.deeplearningbook.org/" }
                        ]
                    }
                ]
            },
            {
                title: "2. Deep Learning Architectures",
                items: [
                    {
                        title: "CNNs, RNNs, Transformers",
                        description: "Specialized architectures for different types of data.",
                        resources: [
                            { type: "video", title: "Stanford CS231n", url: "https://www.youtube.com/playlist?list=PL3FW7Lu3i5Jvng_36U26-lK2I4i5_naZH" },
                            { type: "docs", title: "PyTorch Documentation", url: "https://pytorch.org/docs/stable/index.html" }
                        ]
                    }
                ]
            },
            {
                title: "3. NLP & Computer Vision",
                items: [
                    {
                        title: "Word Embeddings & Object Detection",
                        description: "Applying deep learning to understand and process language and images.",
                        resources: [
                            { type: "video", title: "Stanford CS224n", url: "https://www.youtube.com/playlist?list=PLoROMvodv4rOhcuXMZkNm7j3fVwBBY42z" },
                            { type: "practice", title: "Hugging Face", url: "https://huggingface.co/learn/nlp-course" }
                        ]
                    }
                ]
            }
        ]
    },
    nn: {
        title: "Neural Networks Roadmap",
        description: "From perceptrons to advanced architectures.",
        sections: [
            {
                title: "1. Introduction to Neural Networks",
                items: [
                    {
                        title: "Perceptrons & MLPs",
                        description: "The basic building blocks of neural networks.",
                        resources: [
                            { type: "video", title: "But what is a neural network?", url: "https://www.youtube.com/watch?v=aircAruvnKk" },
                            { type: "docs", title: "Neural Networks from Scratch", url: "https://nnfs.io/" }
                        ]
                    }
                ]
            },
            {
                title: "2. Training Neural Networks",
                items: [
                    {
                        title: "Backpropagation & Gradient Descent",
                        description: "The core algorithms for training neural networks.",
                        resources: [
                            { type: "video", title: "Backpropagation calculus", url: "https://www.youtube.com/watch?v=tIeHLnjs5U8" },
                            { type: "docs", title: "Calculus on Computational Graphs", url: "http://colah.github.io/posts/2015-08-Backprop/" }
                        ]
                    }
                ]
            },
            {
                title: "3. Popular Frameworks",
                items: [
                    {
                        title: "TensorFlow & PyTorch",
                        description: "The two most popular deep learning frameworks.",
                        resources: [
                            { type: "video", title: "PyTorch in 100 Seconds", url: "https://www.youtube.com/watch?v=3-f_G_xAMjk" },
                            { type: "docs", title: "TensorFlow Docs", url: "https://www.tensorflow.org/tutorials" }
                        ]
                    }
                ]
            }
        ]
    }
};

