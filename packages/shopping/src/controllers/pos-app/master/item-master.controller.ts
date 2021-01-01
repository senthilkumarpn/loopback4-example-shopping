// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: loopback4-example-shopping
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {authenticate} from '@loopback/authentication';
import {authorize} from '@loopback/authorization';
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor, param,




  patch, post,






  put,

  requestBody
} from '@loopback/rest';
import {ItemMaster} from '../../../models';
import {ItemMasterRepository} from '../../../repositories';
import {basicAuthorization} from '../../../services/basic.authorizor';
import {OPERATION_SECURITY_SPEC} from '../../../utils/security-spec';


const apiPath = '/pos-app/item-master';
export class ItemMasterController {
  constructor(
    @repository(ItemMasterRepository)
    public itemMasterRepository: ItemMasterRepository,
  ) { }

  @post(apiPath, {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'ItemMaster model instance',
        content: {'application/json': {schema: getModelSchemaRef(ItemMaster)}},
      },
    },
  })
  @authenticate('jwt')
  @authorize({allowedRoles: ['admin', 'customer'], voters: [basicAuthorization]})
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ItemMaster, {
            title: 'NewItemMaster',
            exclude: ['itemmasterid'],
          }),
        },
      },
    })
    itemMaster: Omit<ItemMaster, 'itemmasterid'>,
  ): Promise<ItemMaster> {
    return this.itemMasterRepository.create(itemMaster);
  }

  @get(apiPath + '/count', {
    responses: {
      '200': {
        description: 'ItemMaster model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(ItemMaster))
    where?: Where<ItemMaster>,
  ): Promise<Count> {
    return this.itemMasterRepository.count(where);
  }

  @get(apiPath + '', {
    responses: {
      '200': {
        description: 'Array of ItemMaster model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ItemMaster, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ItemMaster))
    filter?: Filter<ItemMaster>,
  ): Promise<ItemMaster[]> {
    return this.itemMasterRepository.find(filter);
  }

  @patch(apiPath + '', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '200': {
        description: 'ItemMaster PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  @authenticate('jwt')
  @authorize({allowedRoles: ['admin'], voters: [basicAuthorization]})
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ItemMaster, {partial: true}),
        },
      },
    })
    itemMaster: ItemMaster,
    @param.query.object('where', getWhereSchemaFor(ItemMaster))
    where?: Where<ItemMaster>,
  ): Promise<Count> {
    return this.itemMasterRepository.updateAll(itemMaster, where);
  }

  @get(apiPath + '/{id}', {
    responses: {
      '200': {
        description: 'ItemMaster model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ItemMaster, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.query.object('filter', getFilterSchemaFor(ItemMaster))
    filter?: Filter<ItemMaster>,
  ): Promise<ItemMaster> {
    return this.itemMasterRepository.findById(id, filter);
  }

  @patch(apiPath + '/{id}', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '204': {
        description: 'ItemMaster PATCH success',
      },
    },
  })
  @authenticate('jwt')
  @authorize({allowedRoles: ['admin'], voters: [basicAuthorization]})
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ItemMaster, {partial: true}),
        },
      },
    })
    itemMaster: ItemMaster,
  ): Promise<void> {
    await this.itemMasterRepository.updateById(id, itemMaster);
  }

  @put(apiPath + '/{id}', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '204': {
        description: 'ItemMaster PUT success',
      },
    },
  })
  @authenticate('jwt')
  @authorize({allowedRoles: ['admin'], voters: [basicAuthorization]})
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() itemMaster: ItemMaster,
  ): Promise<void> {
    await this.itemMasterRepository.replaceById(id, itemMaster);
  }

  @del(apiPath + '/{id}', {
    security: OPERATION_SECURITY_SPEC,
    responses: {
      '204': {
        description: 'ItemMaster DELETE success',
      },
    },
  })
  @authenticate('jwt')
  @authorize({allowedRoles: ['admin'], voters: [basicAuthorization]})
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.itemMasterRepository.deleteById(id);
  }
}
