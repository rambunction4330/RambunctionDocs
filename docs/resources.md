---
sidebar_position: 1
---

# Learning C++

Here are some places to get started learning C++!

## Hello World!

### The Code

```cpp title="helloworld.cpp"
#include <iostream>

int main() {
  std::cout << "Hello World!" << std::endl;

  return 0;
}
```

### OK! Now How Do I Run It?

Here there are a few options. You can always just use an online IDE like [OnlineGDB](https://www.onlinegdb.com/). Compiling on your local machine, however, is a little more complicated than something like Python. Read [here](https://www.freecodecamp.org/news/compiled-versus-interpreted-languages/) to learn more about the difference between compiled and interpreted languages. To install a compiler, follow [this](https://code.visualstudio.com/docs/languages/cpp#_install-a-compiler) part of the VS Code C++ development guide.

Here is the important compilation command:
```bash
g++ helloworld.cpp -o helloworld
```

`g++` is how we call the compiler, followed by the source file, followed by the `-o` flag which specifies the executable name. Executables are made of gibberish data that is not human readable, but basically contains a list of commands in sequence for the computer processor to run. In macOS and Linux executables generally have no extension, but in Windows they generally have a `.exe` extension.

## Getting Started

- [Codecademy](https://www.codecademy.com/resources/docs/cpp)
- [LEARN C++](https://www.learncpp.com/)
- [W3Schools](https://www.w3schools.com/cpp/cpp_getstarted.asp)
- [Google Data Structures and Algorithms](https://techdevguide.withgoogle.com/paths/data-structures-and-algorithms/)

# [Reference](https://en.cppreference.com/w/)
