const { register } = require('../controllers/user.controller');
const userService = require('../services/user.service');


jest.mock('../services/user.service');

describe('register controller', () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {
        firstName: 'John',
        lastName: 'Doe',
        phone: '1234567890',
        email: 'john@example.com',
        password: 'password123'
      }
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
  });

  it('should return 201 and success message on successful registration', async () => {
    const mockUser = { id: 1, ...req.body };
    userService.registerUser.mockResolvedValue(mockUser);

    await register(req, res);

    expect(userService.registerUser).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ msg: 'user registered' }, mockUser);
  });

  it('should return 501 and error message on failure', async () => {
    userService.registerUser.mockRejectedValue(new Error('Registration failed'));

    await register(req, res);

    expect(userService.registerUser).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(501);
    expect(res.json).toHaveBeenCalledWith({ meg: 'user registration failed' });
  });
});
