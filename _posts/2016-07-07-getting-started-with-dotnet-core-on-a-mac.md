--- 
layout: post 
title: Getting Started with dotnet core on a mac
--- 

Shameless plug - I am co-presenting a workshop with my colleague [Beau Palmquist][1] at [dotnet Fringe][2] this Sunday July 10, 2016. Our workshop is on [Building Smart Microservice Clients with React, Redux, and React-Router][3].

In preparation, I was setting up my Macbook and realized there were no real good instructions on how to get set up with .NET Core on a Mac. Maybe this is because it is so new or maybe because it is so ridiculously easy. Steps 1 and 2 are optional to get the `helloworld` app up and running. We don't actually need to write any code. These steps are for after when you want to get fancier.

######Step 1: Install Your Favorite IDE
This does come with a slight caveat. We need to make use of the [OmniSharp][4] to enable a palatable coding experience in your editor so this does limit our choices slightly. But it does support most of the popular choices like Atom, Sublime and Brackets.

######Step 2: Install OmniSharp
Head over to [OmniSharp][4] to get install instructions for your IDE.

######Step 3: Install .NET Core
To install .NET Core we need to install the latest version of OpenSSL. The easiest way to do this is with [Homebrew][5] with the following commands:

    ~$ brew update
The `update` command ensures your are running the latest Homebrew with the latest formulae.

    ~$ brew install openssl
The `install` command does exactly what you would think. It installs the OpenSSL package.

    ~$ brew link --force openssl
The `link --force` command Symlinks all the keg-only formulae into the Homebrew prefix.

Now we can just grab the .NET Core [official installer][6] and we are ready to write some code.

######Step 4: Write Code (Sort of)
To get up and running with the basic 'Hello World' app we just need to run a few more commands:

    ~$ mkdir helloworld
    ~$ cd helloworld
    ~$ dotnet new
    ~$ dotnet restore
    ~$ dotnet run

After running this series of commands we should see something like this

![Console Output](/content/images/2016/07/Screen-Shot-2016-07-07-at-12-29-40.png)

And done! 
 
[1]: https://beaupalmquist.me/2016/07/07/workshop-at-net-fringe-2016/
[2]: http://dotnetfringe.org/
[3]: http://lanyrd.com/2016/netfringe/sfctyw/
[4]: http://www.omnisharp.net/#integrations
[5]: http://brew.sh/
[6]: https://go.microsoft.com/fwlink/?LinkID=809124