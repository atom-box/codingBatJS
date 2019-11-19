module Main exposing (..)
import Html
import String

name1 = "Sandy Koufax"
name2 = "merlin"
name3 = "Huey Lewis and News"
name4 = "Fincoln"
names = [ name1, name2, name3, name4]
message = String.join " " names
--- stringLong = String.fromInt  <| String.length message ---

toTell x = if String.length x > 10 "Wow; long." else "Size is modest."

main =   Html.text toTell names

--- make a list
--- write the funtion
--- map the list to a new list
--- output the list


