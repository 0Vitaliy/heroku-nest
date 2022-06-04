import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
// import { FileService, FileType } from "src/file/file.service";
import { CreateCommentDto } from "./dto/create-comment.dto copy";
import { CreateTrackDto } from "./dto/create-track.dto";
import { Comment, CommentDocument } from "./schemas/coments.schema";
import { Track, TrackDocument } from "./schemas/track.schema";

@Injectable()
export class TrackService {

  constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>) { }

  async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
    // const audioPath = this.fileService.createFile(FileType.AUDIO, audio)
    // const picturePath = this.fileService.createFile(FileType.IMAGE, picture)
    const track = await this.trackModel.create({ ...dto, listens: 0 });
    return track;
  }
  async getAll(count = 10, offset = 0): Promise<Track[]> {
    const tracks = await this.trackModel.find().skip(offset).limit(count);
    return tracks
  }

  async getOne(id: ObjectId): Promise<Track> {
    const track = await (await this.trackModel.findById(id)).populated("comments");
    return track
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const track = await this.trackModel.findByIdAndDelete(id);
    return track._id
  }

  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const track = await this.trackModel.findById(dto.trackId);
    const comment = await this.commentModel.create({ ...dto });
    track.comments.push(comment._id)
    await track.save()
    return comment
  }

  async listen(id: ObjectId) {
    const track = await this.trackModel.findById(id);
    track.listens += 1
    track.save()
  }

  async search(query): Promise<Track[]> {
    const tracks = await this.trackModel.find({
      name: { $regex: new RegExp(query, 'i') }
    });
    return tracks
  }

}