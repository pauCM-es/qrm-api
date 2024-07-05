import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  /**
   * this is function is used to create a product in Product Entity.
   * @param createProductDto this will type of productDto in which
   * we have defined what are the keys we are expecting from body
   * @returns promise of product
   */
  create(createProductDto: ProductDto) {
    const newProduct: Product = new Product();
    newProduct.code = createProductDto.code;
    newProduct.name = createProductDto.name;

    return this.productRepository.save(newProduct);
  }

  /**
   * this function is used to get all the products's list
   * @returns promise of array of products
   */
  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  /**
   * this function is used to updated specific product whose id is passed in
   * parameter along with passed updated data
   * @param id is type of number, which represent the id of user.
   * @param updateUserDto this is partial type of createUserDto.
   * @returns promise of udpate user
   */
  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productRepository.update(id, updateProductDto);
  }

  /**
   * this function is used to remove or delete a product from database.
   * @param code is of type string, which represent code of the product
   * @returns product deleted
   */
  delete(code: string) {
    return this.productRepository.delete(code);
  }
}
