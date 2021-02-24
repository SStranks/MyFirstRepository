# Git Ignore Patterns

[Ignoring Files in Git](https://www.atlassian.com/git/tutorials/saving-changes/gitignore)

**.gitignore** uses globbing patterns to match against file names. You can construct your patterns using various symbols

| Pattern	| Example matches	| Explanation* |
| :---    | :---            | :---         |
| **/logs	| logs/debug.log <br> logs/monday/foo.bar <br> build/logs/debug.log	| You can prepend a pattern with a double asterisk to match directories anywhere in the repository. |
| **/logs/debug.log	| logs/debug.log <br> build/logs/debug.log <br> but not <br> logs/build/debug.log | You can also use a double asterisk to match files based on their name and the name of their parent directory.
