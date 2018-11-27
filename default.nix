with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "types-superpowers";
  buildInputs = [
    pkgs.nodejs-8_x
  ];
}
