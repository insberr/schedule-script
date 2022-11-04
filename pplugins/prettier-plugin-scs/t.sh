echo t
yarn scs minify ../../examples/main.ex.scs test.scs
yarn prettier --plugin . --write test.scs