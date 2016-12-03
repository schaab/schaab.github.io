--- 
layout: post 
title: Improve Your Commit Messages 
--- 

## IMPROVE YOUR COMMIT MESSAGES

In writing this I realized that this is **not** a sexy topic. This is probably due more to the fact that no one really
complains or cares about it. However, having worked on several projects and with many people, I have come to realize that 
commit messages are like insurance policies (which are also not sexy). You don't really want them but when you need 
them they can really save your ass. If you have ever tried to sift through the commit history on your code base you'll 
quickly realize two things:

1. Most people suck at writing informative commit messages
2. You are one of those people that sucks

I have seen messages range from `bug fixes` all the way to `Add new fancy js library`. Sadly, a lot of them were
written by yours truly.

![Git commit messages get less informative over time](http://imgs.xkcd.com/comics/git_commit.png)

These types of commit messages have started to make me cringe as they don't answer any of the questions one might
have when looking at the commit history like:

* What feature/bug did you work on?
* Why is this even important?
* Does this fix something that was broken?
* Does this break anything else?

Sure some of those questions can be answered by going to look at a feature or bug ticket but I don't want to have to 
switch systems every time I need to find out more information about a commit. I'll be honest, at first I didn't really 
have any thoughts on how we could improve these other than being more specific, in both the work we were performing 
and our messages. When I say 'work' I mean the changes we are making to the code base.

So now that I have you feeling extremely crappy about your commit messages. Let's go over how to get better. Here is
the format we are going to be going for. Just a note, I am not randomly recommending this format this is actually based
on the format suggested by git when [submitting patches][1] and further inspired by [karma's commit style][2]. They are
called semantic commit messages.

[1]: http://git.kernel.org/cgit/git/git.git/tree/Documentation/SubmittingPatches?id=HEAD
[2]: http://karma-runner.github.io/1.0/dev/git-commit-msg.html

<script src="https://gist.github.com/schaab/72a63bf85cfd5c794f940661e1e11377.js"></script>

### Message Header

`<type>(<scope>): <subject>`

The message header is a concise single line description, under 75 characters, of the change. As we can see from the 
template it contains a **type**, **scope** and a **subject**. We'll cover these in more details below.

If you need to revert a previous commit use that commits header and prepend it with **revert:**. In the message body, 
add a link to the SHA of the commit being reverted.

#### &lt;type&gt;

This describes the kind of change for the commit, from the list below:

* feat (new user feature)
* fix (bug fix on a user feature)
* docs (documentation updates)
* style (code style changes; no production code changes)
* refactor (refactoring production code) 
* test (adding/refactoring tests; no production code changes)
* chore (updating gulp tasks; no production code changes)

#### &lt;scope&gt;

`<scope>` is an optional value and is based on the areas of your projects. These values are up to you to define.

#### &lt;subject&gt;

This is a short description of your change. Make sure to use the imperative (i.e. present ) tense (e.g. 'Update' vs 
'Updated' or 'Change' vs 'Changes').

### Message Body

`<body>`

While you can think of the header as a 'tweet' think of the body as a mini-blog posting. Just like with the `<subject>`
we want to make sure we are using the present tense. Describe the **what** and **why** you made the changes and **how** 
it differs from the original implementation. Bullet points are OK here and I actually prefer using them.

### Message Footer

`<footer>`

The message footer is a spot to document any related issues that are closed like `Closed #1234` or `Closes #1234, #567`
and to document any breaking changes.

### Wrap Up

So putting all this together we will have commit messages that look like this:

<script src="https://gist.github.com/schaab/2ba32d92c87ce434171d08024d47053e.js"></script>
