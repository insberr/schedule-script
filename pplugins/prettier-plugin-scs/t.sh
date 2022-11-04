echo t
yarn scs pretty ../../examples/main.ex.scs test.scs
yarn prettier --plugin . --write test.scs