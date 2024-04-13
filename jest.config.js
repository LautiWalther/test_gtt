module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts'], // Patrón para encontrar archivos de prueba
    collectCoverage: true, // Habilita la cobertura de código
    coverageDirectory: 'coverage', // Directorio donde se guardan los resultados de la cobertura
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  };
  